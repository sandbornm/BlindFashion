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

import {ThemeContext} from "../contexts/ThemeContext";
import changelogo from "../assets/images/ChangeLogo.png";


function CreditScreen(props) {
    return (
        // consume the theme context
        <ThemeContext.Consumer>{(context) => {

            // destructuring
            const {isInverted, normal, inverted, toggleTheme} = context;

            // check theme type (updated anytime the context changes)
            const theme = isInverted ? inverted : normal;

            return (
                <View style={theme.container}>
                    <View style={theme.contentContainer}>
                    <Text style={theme.text}>
                        This app was developed by Change++, a student-run organization at Vanderbilt University that builds software for nonprofits in the Nashville area and across the country.
                        If you have a potential project, visit changeplupus.org for more details on how to contact us!
                        With questions about this app, contact Change++ Project Manager, Chenhao Ma at chenhao.ma@vanderbilt.edu
                    </Text>
                    <Image source={changelogo}
                           resizeMethod={'scale'}
                           style={{height:80,width:80,marginLeft:7,marginBottom:-22,marginTop:10}}/>
                    </View>
                </View>
            )
        }}</ThemeContext.Consumer>

    );
}



export default withNavigation(CreditScreen);