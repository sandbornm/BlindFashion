import React from 'react';
import {withNavigation} from "react-navigation";
import {Image, ScrollView, Switch, Text, View} from "react-native";
import {ThemeContext} from "../contexts/ThemeContext";
import closetplaceholder from "../assets/images/closetplaceholder.png"
import settingsicon from "../assets/images/cog-outline.png";


function UserCloset(props){
    return(

        <ThemeContext.Consumer>{(context) => {

            // destructuring
            const {isInverted, normal, inverted, toggleTheme} = context;

            // check theme type (updated anytime the context changes)
            const theme = isInverted ? inverted : normal;

            return (
                <View style={theme.settingsContainer}>
                    <Image source={closetplaceholder}
                           resizeMethod={'scale'}
                           style={{height:100, width:320,marginLeft:20, marginTop:10}}/>
                    <View style={theme.row}/>
                    <View style={theme.row}>
                        <Text style={theme.headerText}> Welcome to your closet </Text>
                    </View>

                </View>
            )
        }}</ThemeContext.Consumer>
    );
}
export default withNavigation(UserCloset);