import React from 'react';
import { withNavigation } from 'react-navigation';
import {
    Image,
    Button,
    ScrollView,
    Text,
    View,
} from 'react-native';

import icon from '../assets/images/icon.png';
import {ThemeContext} from "../contexts/ThemeContext";


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
                    <ScrollView contentContainerStyle={theme.contentContainer}>

                        <View style={theme.welcomeContainer}>
                            <Image source={icon} style={theme.welcomeImage}/>
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
                            <Button  onPress={() => props.navigation.navigate("Login")}
                                     color="white"
                                     title="Login"/>
                        </View>
                        <View style={theme.button}>
                            <Button  onPress={() => props.navigation.navigate("SignUp")}
                                     color="white"
                                     title="Sign up"/>
                        </View>
                        <View style={theme.button}>
                            <Button  onPress={() => props.navigation.navigate("Scan")}
                                     color="white"
                                     title="Scan"/>
                        </View>

                    </ScrollView>
                </View>
            )
        }}</ThemeContext.Consumer>

    );
}



export default withNavigation(HomeScreen);