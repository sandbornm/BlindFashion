import React from 'react';
import { withNavigation } from 'react-navigation';
import {
    Image,
    TouchableOpacity,
    View,
} from 'react-native';
import * as Speech from 'expo-speech';

import styles from '../universalStyle.js';
import API from "../Api/Database_API";
import scanImage from '../assets/images/nfcicon.png';

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

function ScanScreen() {
    return (

        <View style={styles.container}>
            <TouchableOpacity style={styles.scanImage} onPress={scanButtonPressed}>
                <Image style={{flex: 1}} resizeMode="contain" source={scanImage} />
            </TouchableOpacity>
        </View>

    );
}


// const styles = StyleSheet.create({
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

