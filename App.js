import React, { Component, useState } from 'react';
import {View, Text, StyleSheet, Image, StatusBar, Button, ScrollView} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import image1 from './assets/images/icon.png';
import image2 from './assets/images/icon.png';
import image3 from './assets/images/icon.png';
import ThemeContextProvider from "./contexts/ThemeContext";
import AppNavigator from "./navigation/AppNavigator";
import {Stitch} from "mongodb-stitch-react-native-sdk";
import './globals.js';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            showSlides: true,
            finishedLoading:false
        }
    }

    changeState(state){
        this.setState({finishedLoading:state})
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.container1}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image} />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }
    onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showSlides: false });
        this.setState({ finishedLoading: true });
    }
    //add a customized next button


    _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Image source={image2} />
            </View>
        );
    };

    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Image source={image1} />
            </View>
        );
    };


    render() {
        if (!this.state.showSlides) {
            if(!this.state.finishedLoading) {
                try {
                    loadResourcesAsync().then(() => handleFinishLoading());
                    this.changeState(true)
                } catch (e) {
                    console.warn(e);
                }
            }
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
                    showSkipButton
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
    buttonCircle: {
        width: 44,
        height: 44,
        backgroundColor: '#cfbdff',
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        flex: 1,
        backgroundColor: "#fff",
    },
    container1: {
        flex:1,
        paddingTop:20,
        justifyContent: "center",
        marginTop:50,
        alignItems: "center",

    },
    title: {
        fontSize: 25,
        textAlign:'center'
    },
    text: {
        fontSize: 16,
        textAlign:'center'
    }
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
        image: image2,
        backgroundColor: '#febe29',
    },
    {
        key: '3',
        title: 'Help you match colors for your outfits',
        image: image3,
        backgroundColor: '#22bcb5',
    },
    {
        key: '4',
        title: 'and find the color shades that best suit your skin tone',
        image: image3,
        backgroundColor: '#22bcb5',
    }
];
