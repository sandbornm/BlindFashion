import React from 'react';
import { withNavigation } from 'react-navigation';
import {
    Image,
    TouchableOpacity,
    View,
} from 'react-native';
//import * as Speech from 'expo-speech';
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
import {useState, useEffect} from 'react';

import API from "../Api/Database_API";
import scanImage from '../assets/images/nfcicon.png';
import {ThemeContext} from "../contexts/ThemeContext";

async function scanButtonPressed() {
    try{
        /*
        const id = "ebe4da87c3a1ae0d2672e227c5670556";
        const response = await API.getItem(id);
        const parsedObj = response[0];
        console.log(parsedObj);
        if(parsedObj.description){
            Speech.speak(parsedObj.description);
        }else{
            Speech.speak("Description couldn't be found for this dress");
        }

         */
    }catch (e) {
        console.log(e);
    }
}

function ScanScreen() {

    // useEffect() with empty second argument acts as componentDidMount() for functional components
    // [] means this effect doesn't depend on any values from props or state and doesn't need to re-run
    useEffect(() => {
        NfcManager.start();
        NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
            console.warn('tag', tag);
            NfcManager.setAlertMessageIOS('I got your tag!');
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


// const theme = themeheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     headerText: {
//         fontSize: 30,
//         textAlign: 'center'
//     },
//
//     picture:{
//         flex:.5,
//         width:300,
//         height:50,
//     }
// });

export default withNavigation(ScanScreen);

