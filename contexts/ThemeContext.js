import React, { createContext, Component } from 'react';
import {Platform} from "react-native";

export const ThemeContext = createContext("light");

// data we want to share
class ThemeContextProvider extends Component {

    // data being shared via the context...contains the normal and inverted themes
    state = {
        isInverted: false,
        normal: {
            container: {
                flex:1,
                backgroundColor: 'white',
                justifyContent: "center",
                alignItems: "center",
                flexWrap: 'wrap'
            },
            developmentModeText: {
                marginBottom: 20,
                color: 'black',
                fontSize: 14,
                lineHeight: 19,
                textAlign: 'center',
            },
            row: {
                flex: 0,
                marginBottom: 5,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start'
            },
            contentContainer: {
                flex:.73,
                justifyContent: "center",
                alignItems: "center",
            },
            button:{
                width: "50%",
                margin: 10,
                backgroundColor: '#cfbdff',
                borderTopLeftRadius: 21,
                borderTopRightRadius: 21,
                borderBottomLeftRadius: 21,
                borderBottomRightRadius: 21,
            },
            settingsButton:{
                marginLeft:270,
                marginRight:0,
                width: "13%",
                backgroundColor: '#cfbdff',
                borderTopLeftRadius: 21,
                borderTopRightRadius: 21,
                borderBottomLeftRadius: 21,
                borderBottomRightRadius: 21,
            },
            text:{
                fontSize:15,
                marginBottom:10,
                color: "black",
            },
            welcomeContainer: {
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 20,
            },
            welcomeImage: {
                width: 300,
                height: 200,
                resizeMode: 'contain',
            },
            getStartedContainer: {
                alignItems: 'center',
                marginHorizontal: 50,
            },
            homeScreenFilename: {
                marginVertical: 7,
            },
            headerText: {
                fontSize: 40,
                marginBottom: 5,
                textAlign: 'center',
                color: 'black',
            },
            scanImage: {
                flex: 0.5,
                alignItems: 'center',
                width: "80%",
                height: undefined,
                margin: "5%"
            },
            navigationFilename: {
                marginTop: 5,
            },
            helpContainer: {
                marginTop: 15,
                alignItems: 'center',
            },
            helpLink: {
                paddingVertical: 15,
            },
            bodyText: {
                fontSize: 14,
                color: 'black',
                textAlign: 'center'
            },
            formText: {
                fontSize: 24,
                color: 'black',
                textAlign: 'center',
                width: '35%',
            },
            formInput: {
                height: 40,
                width: '50%',
                backgroundColor:"white",
                borderColor: 'gray',
                borderWidth: 1,
                marginLeft: 10
            }
        },
        inverted: {
            container: {
                flex: 1,
                backgroundColor: 'black',
                justifyContent: "center",
                alignItems: "center",
                flexWrap: 'wrap'
            },
            developmentModeText: {
                marginBottom: 20,
                color: 'white',
                fontSize: 14,
                lineHeight: 19,
                textAlign: 'center',
            },
            row: {
                flex: 0,
                marginBottom: 5,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start'
            },
            contentContainer: {
                flex:.73,
                justifyContent: "center",
                alignItems: "center",
            },
            button:{
                width: "50%",
                margin: 10,
                backgroundColor: '#304200',
                borderTopLeftRadius: 21,
                borderTopRightRadius: 21,
                borderBottomLeftRadius: 21,
                borderBottomRightRadius: 21,
            },
            settingsButton:{
                marginLeft:270,
                marginRight:0,
                width: "13%",
                backgroundColor: '#304200',
                borderTopLeftRadius: 21,
                borderTopRightRadius: 21,
                borderBottomLeftRadius: 21,
                borderBottomRightRadius: 21,
            },
            text:{
                fontSize:15,
                marginBottom:10,
                color: "white",
            },
            welcomeContainer: {
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 20,
            },
            welcomeImage: {
                width: 200,
                height: 160,
                resizeMode: 'contain',
                marginTop: 3,
                marginLeft: -10,
            },
            getStartedContainer: {
                alignItems: 'center',
                marginHorizontal: 50,
            },
            homeScreenFilename: {
                marginVertical: 7,
            },
            headerText: {
                fontSize: 40,
                marginBottom: 5,
                textAlign: 'center',
                color: 'white',
            },
            scanImage: {
                flex: 0.5,
                alignItems: 'center',
                width: "80%",
                height: undefined,
                margin: "5%"
            },
            navigationFilename: {
                marginTop: 5,
            },
            helpContainer: {
                marginTop: 15,
                alignItems: 'center',
            },
            helpLink: {
                paddingVertical: 15,
            },
            bodyText: {
                fontSize: 14,
                color: 'white',
                textAlign: 'center'
            },
            formText: {
                fontSize: 24,
                color: 'white',
                textAlign: 'center',
                width: '35%',
            },
            formInput: {
                height: 40,
                width: '50%',
                backgroundColor:"white",
                borderColor: 'gray',
                borderWidth: 1,
                marginLeft: 10
            }
        }
    }

    // function used in settings page to invert the app colors
    toggleTheme = () => {
        // toggle inverted state to update consuming components
        this.setState({ isInverted: !this.state.isInverted});
    }

    render() {
        return (
            // data that is provided to consuming components
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;