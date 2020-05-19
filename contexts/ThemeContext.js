import React, { createContext, Component } from 'react';
import {Platform} from "react-native";

export const ThemeContext = createContext();

// data we want to share
class ThemeContextProvider extends Component {

    // data being shared via the context...contains the normal and inverted themes
    state = {
        isInverted: false,
        normal: {
            container: {
                flex: 1,
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
                flex: 0.1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start'
            },
            contentContainer: {
                paddingTop: 30,
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
                marginRight:10,
                width: "15%",
                backgroundColor: '#cfbdff',
                borderTopLeftRadius: 21,
                borderTopRightRadius: 21,
                borderBottomLeftRadius: 21,
                borderBottomRightRadius: 21,
            },
            text:{
                color: "black",
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
            tabBarInfoContainer: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                ...Platform.select({
                    ios: {
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: -3 },
                        shadowOpacity: 0.1,
                        shadowRadius: 3,
                    },
                    android: {
                        elevation: 20,
                    },
                }),
                alignItems: 'center',
                backgroundColor: '#fbfbfb',
                paddingVertical: 20,
            },
            tabBarInfoText: {
                fontSize: 17,
                color: 'rgba(96,100,109, 1)',
                textAlign: 'center',
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
                flex: 0.1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start'
            },
            contentContainer: {
                paddingTop: 30,
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
                marginRight:10,
                width: "15%",
                backgroundColor: '#304200',
                borderTopLeftRadius: 21,
                borderTopRightRadius: 21,
                borderBottomLeftRadius: 21,
                borderBottomRightRadius: 21,
            },
            text:{
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
            tabBarInfoContainer: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                ...Platform.select({
                    ios: {
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: -3 },
                        shadowOpacity: 0.1,
                        shadowRadius: 3,
                    },
                    android: {
                        elevation: 20,
                    },
                }),
                alignItems: 'center',
                backgroundColor: '#040404',
                paddingVertical: 20,
            },
            tabBarInfoText: {
                fontSize: 17,
                color: 'rgba(159,155,146, 1)',
                textAlign: 'center',
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
                backgroundColor:"black",
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