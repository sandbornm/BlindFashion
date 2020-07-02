import React, { Component, useState } from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import image1 from './assets/images/KumiHomeScreen.png';
import image2 from './assets/images/KumiWalkThrough.png';
import image3 from './assets/images/KumiWalkThrough2.png';
import image4 from './assets/images/nfc-reading-motion.gif';
import ThemeContextProvider from "./contexts/ThemeContext";
import AppNavigator from "./navigation/AppNavigator";
import {Stitch} from "mongodb-stitch-react-native-sdk";
import Icon, { Ionicons } from 'react-native-vector-icons/Ionicons';
import './globals.js';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showSlides: true,

        }
    }

    async componentDidMount() {
        try {
            loadResourcesAsync().then(() => handleFinishLoading());
        } catch (e) {
            console.warn(e);
        }
    }
    renderItem = ({ item }) => {
        return (
            <View style={styles.walkthroughcontainer}>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }
    onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showSlides: false });
    }

    _renderDoneButton = () => {
        return (
            <View style={styles.doneButton}>
                <Text style={styles.buttonText}>
                    Let's get started!
                </Text>
            </View>
        );
    };

    _renderNextButton = () => {
        return (

            <View style={styles.buttonCircle}>
                <Icon
                    name="md-arrow-round-forward"
                    color="#fff"
                    size={24}
                />
            </View>

        );
    };

    _renderSkipButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Image source={image1} />
            </View>
        );
    };

    render() {
        if (!this.state.showSlides) {
            return (<View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                <ThemeContextProvider>
                    <AppNavigator/>
                </ThemeContextProvider>
            </View>);
        } else {
            return (
                <AppIntroSlider
                    renderDoneButton={this._renderDoneButton}
                    renderNextButton={this._renderNextButton}
                    renderSkipButton={this._renderSkipButton}
                    bottomButton
                    renderItem={this.renderItem}
                    data={slides}
                    onDone={this.onDone}/>
            );
        }
    }
}
async function handleFinishLoading() {
    await Stitch.initializeDefaultAppClient('blindfashion-gyera');
}
async function loadResourcesAsync() {

}

const styles = StyleSheet.create({
    //shift this to the right
    buttonContainer:{
        paddingLeft:100,
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: '#cfbdff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    doneButton:{
        width: 130,
        height: 40,
        backgroundColor: '#cfbdff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 350,
        height: 300,
        resizeMode: 'contain',
    },
    container:{
        flex: 1,
        backgroundColor: "#fff",
    },
    walkthroughcontainer: {
        flex:1,
        paddingTop:20,
        justifyContent: "center",
        marginTop:50,
        alignItems: "center",

    },
    title: {
        fontSize: 24,
        marginTop:15,
        textAlign:'center'
    },
    text: {
        fontSize: 16,
        textAlign:'center'
    },
    buttonText:{
        color:"white",
    },
});

const slides = [
    {
        key: '1',
        title: 'Hello, Welcome to Kumi',
        text: 'Your clothing and style advisor',
        backgroundColor: '#59b2ab',
    },
    {
        key: '2',
        title: ' Kumi will generate details about your garment',
        image: image1,
        backgroundColor: '#febe29',
    },
    {
        key: '3',
        title: 'Help you match colors for your outfits',
        image: image2,
        backgroundColor: '#22bcb5',
    },
    {
        key: '4',
        title: 'and find the color shades that best suit your skin tone',
        image: image3,
        backgroundColor: '#22bcb5',
    },
    {
        key:'5',
        title:'Just tap your phone on a NFC chip to get the information about that piece of clothing',
        image:image4,

    },
];
