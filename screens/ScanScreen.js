import React from 'react';
import { withNavigation } from 'react-navigation';
import {
    Image,
    TouchableOpacity,
    View,
} from 'react-native';

import API from "../Api/Database_API";
import scanImage from '../assets/images/nfcicon.png';
import {ThemeContext} from "../contexts/ThemeContext";
import NfcManager, {NfcEvents, Ndef} from 'react-native-nfc-manager';
import {useState, useEffect} from 'react';

/*
 * Starts searching for a tag by registering a tag event with the NfcManager
 */
async function scanButtonPressed() {
    // try{
    //     /*
    //     const id = "ebe4da87c3a1ae0d2672e227c5670556";
    //     const response = await API.getItem(id);
    //     const parsedObj = response[0];
    //     console.log(parsedObj);
    //     if(parsedObj.description){
    //         Speech.speak(parsedObj.description);
    //     }else{
    //         Speech.speak("Description couldn't be found for this dress");
    //     }
    //
    //      */
    // }catch (e) {
    //     console.log(e);
    // }

    try {
        // start searching for tag
        await NfcManager.registerTagEvent(tag => {
            let parsed = _onTagDiscovered(tag);
            console.log("You scanned: " + parsed);
        }, 'Hold your device over the clothing tag');
    } catch (ex) {
        console.warn('ex', ex);
        NfcManager.unregisterTagEvent().catch(() => 0);
    }
}

/*
 * Retrieves clothing item by id from the mongodb cluster0 via our API.
 *
 * @param id The id from the NFC tag that (hopefully) corresponds to a clothing item in the descriptions collection.
 * @return a JSON object containing the entry in the descriptions collection based on id.
 */
async function getClothingItem(id) {
    const response = await API.getItem(id);
    const parsedObj = response[0];

    if(parsedObj.description) {
        console.log(JSON.stringify(parsedObj));
    }

    return parsedObj;
}

/*
 * Takes the tag payload, parses the NDEF records and returns an array of form [["uri", "<message data>"]]
 */
function _onTagDiscovered(tag) {
    console.log('Tag Discovered', tag);

    let parsed = null;
    if (tag.ndefMessage && tag.ndefMessage.length > 0) {
        // ndefMessage is actually an array of NdefRecords,
        // and we can iterate through each NdefRecord, decode its payload
        // according to its TNF & type
        const ndefRecords = tag.ndefMessage;

        function decodeNdefRecord(record) {
            if (Ndef.isType(record, Ndef.TNF_WELL_KNOWN, Ndef.RTD_TEXT)) {
                return ['text', Ndef.text.decodePayload(record.payload)];
            } else if (Ndef.isType(record, Ndef.TNF_WELL_KNOWN, Ndef.RTD_URI)) {
                return ['uri', Ndef.uri.decodePayload(record.payload)];
            }

            return ['unknown', '---']
        }

        parsed = ndefRecords.map(decodeNdefRecord);
    }

    // extract text from array
    return parsed[0][1];
}

/*
 * React Functional Component that renders the scanning screen
 */
function ScanScreen() {

    // useEffect() with empty second argument acts as componentDidMount() for functional components
    // [] means this effect doesn't depend on any values from props or state and doesn't need to re-run
    useEffect(() => {
        NfcManager.start();
        NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
            NfcManager.setAlertMessageIOS('I got your tag!');

            // decode payload and parse
            let id = _onTagDiscovered(tag);

            // log scanning information to the console
            console.log("You scanned: " + id);

            // retrieve clothing information from database
            // need to use .then() to log because getClothingItem is an async function
            getClothingItem(id).then(clothingItem => {
                console.log("clothing item: " + clothingItem['item']);
                console.warn("This is a " + clothingItem['brand']
                    + " " + clothingItem['item'] + " , size " + clothingItem['size']);
            });

            // unregister tag event
            NfcManager.unregisterTagEvent().catch(() => 0);
        });

        // this arrow function acts as componentWillUnmount() for functional components
        // it is run as a callback when this component un-mounts
        return () => {
            NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
            NfcManager.unregisterTagEvent().catch(() => 0);
        };
    }, []);

    return (
        <ThemeContext.Consumer>{(context) => {

            // destructuring
            const {isInverted, normal, inverted, toggleTheme} = context;

            // check theme type (updated anytime the context changes)
            const theme = isInverted ? inverted : normal;
            
            return(
                <View style={theme.container}>
                    <TouchableOpacity style={theme.scanImage} onPress={scanButtonPressed}>
                        <Image style={{flex: 1}} resizeMode="contain" source={scanImage} />
                    </TouchableOpacity>
                </View>
            )
        }}</ThemeContext.Consumer>
        

    );
}

export default withNavigation(ScanScreen);