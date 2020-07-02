import React from 'react';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import {
    Image,
    Button,
    ScrollView,
    Text,
    View,
} from 'react-native';

import HomeScreenPicture from '../assets/images/KumiHomeScreen.png';
import {ThemeContext} from "../contexts/ThemeContext";
import settingsicon from "../assets/images/cog-outline.png";
import changelogo from "../assets/images/ChangeLogo.png";


function HomeScreen(props) {
    return (
        // consume the theme context
        <ThemeContext.Consumer>{(context) => {

            // destructuring
            const {isInverted, normal, inverted, toggleTheme} = context;

            // check theme type (updated anytime the context changes)
            const theme = isInverted ? inverted : normal;

            return (
                <View style={theme.container}>
                    <View style={theme.settingsButton}>
                        <Image source={settingsicon}
                               resizeMethod={'scale'}
                               style={{marginLeft:7,marginBottom:-22,marginTop:5}}/>
                        <Button  onPress={() => props.navigation.navigate("Settings")}
                                 color="white"
                                 title=""/>
                    </View>
                    <ScrollView contentContainerStyle={theme.contentContainer}>

                        <View style={theme.welcomeContainer}>
                            <Image source={HomeScreenPicture} style={theme.welcomeImage}/>
                        </View>

                        <View>
                            <Text style={theme.headerText}>
                                Hello!
                            </Text>
                        </View>

                        <View>
                            <Text style={theme.headerText}>
                                Welcome to Kumi
                            </Text>
                        </View>
                        <View style={theme.button}>
                            <Button  onPress={() => props.navigation.navigate("SignUp")}
                                     color="white"
                                     title="Sign up"/>
                        </View>
                        <View style={theme.button}>
                            <Button  onPress={() => props.navigation.navigate("Login")}
                                     color="white"
                                     title="Login"/>
                        </View>

                    </ScrollView>
                    <View style={{marginLeft:0,
                        marginRight:200,
                        marginBottom:50,
                        width: "13%",
                        alignItems:'center',
                      }}>
                        <Image source={changelogo}
                               resizeMethod={'scale'}
                               style={{height:100,width:100,marginLeft:7,marginBottom:-70,marginTop:-10}}/>
                        <Button  onPress={() => props.navigation.navigate("Credit")}
                                 color="white"
                                 title=""/>
                    </View>
                </View>
            )
        }}</ThemeContext.Consumer>

    );
}



export default withNavigation(HomeScreen);