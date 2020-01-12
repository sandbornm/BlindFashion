import React from 'react';
import {ExpoConfigView} from '@expo/samples';
import {
    Image, ScrollView,
    StyleSheet,
    Button,
    Alert,
    Text, TouchableOpacity,
    View,
} from 'react-native';
import * as Speech from 'expo-speech';


import API from "../Api/FetchDescriptions";

async function scanButtonPressed() {
    try{
        const id = "ebe4da87c3a1ae0d2672e227c5670556";
        const response = await API.getItem(id);
        const parsedObj = response[0];
        console.log(parsedObj);
        if(parsedObj.description){
            Speech.speak(parsedObj.description);
        }else{
            Speech.speak("Description couldn't be found for this dress");
        }
    }catch (e) {
        console.log(e);
    }
}

export default function ScanScreen() {
    return (

        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Button style={styles.button}
                    title="Start Scanning"
                    color="#000000"
                    onPress={scanButtonPressed}
            />
            <Image
                source={
                    __DEV__
                        ? require('../assets/images/nfcicon.png')
                        : require('../assets/images/nfcicon.png')
                }

                style={styles.picture}
            />
{/*            <Text style={styles.headerText}>This is the scanning page</Text>
            <Text>To modify, go to BlindFashion/screens/ScanScreen</Text>*/}
        </View>

    );
}

ScanScreen.navigationOptions = {
    title: 'Scan',
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 30,
        textAlign: 'center'
    },

    picture:{
        flex:.5,
        width:300,
        height:50,
    }
});
