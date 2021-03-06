import React, { useState } from 'react';
import { withNavigation } from 'react-navigation';
import {
    Image,
    TouchableOpacity,
    View,
    Text,
    Button
} from 'react-native';
import Modal from 'react-native-modal';
import * as Speech from 'expo-speech';

import API from "../Api/Database_API";
import scanImage from '../assets/images/nfcicon.png';
import {ThemeContext} from "../contexts/ThemeContext";

function ScanScreen() {
    async function scanButtonPressed() {
        setScanPressed(true);
        try{

            const id = "ebe4da87c3a1ae0d2672e227c5670556";
            const response = await API.getItem(id);
            const parsedObj = response[0];
            console.log(parsedObj);
            if(parsedObj.description){
                Speech.speak(parsedObj.color);
                Speech.speak(parsedObj.brand);
                Speech.speak(parsedObj.description);
                Speech.speak(parsedObj.size);
            }else{
                Speech.speak("Description couldn't be found for this dress");
            }


        }catch (e) {
            console.log(e);
        }
    }

    const [scanPressed, setScanPressed] = useState(false);

    let modalStyle = {
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <ThemeContext.Consumer>{(context) => {

            // destructuring
            const {isInverted, normal, inverted, toggleTheme} = context;

            // check theme type (updated anytime the context changes)
            const theme = isInverted ? inverted : normal;
            
            return(
                <View style={theme.container}>

                    <View style={{marginRight:2000, alignContent:'center'}}>
                        <TouchableOpacity style={theme.scanImage} onPress={scanButtonPressed}>
                            <Image  style={{height:300, flex:.43,marginLeft:-65, marginTop:200}} resizeMode="contain" source={scanImage} />
                        </TouchableOpacity>
                    </View>

                    <Modal style={{color:'#cfbdff'}} backropColor={'#cfbdff'} isVisible={scanPressed} onBackdropPress={() => setScanPressed(false)} >
                        <View style={modalStyle}>
                            <Text style={{color:'white', fontSize:40}}>This is a beige/off-white Madewell brand evercrest turtleneck sweater, size women's small.</Text>
                        </View>
                    </Modal>

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

