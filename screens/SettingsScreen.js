import React, {Component} from 'react';
import { withNavigation } from 'react-navigation';

import {
  Text,
  View,
  Switch,

} from 'react-native';
import {ThemeContext} from "../contexts/ThemeContext";

class SettingsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            invertColors: false,
            fontSize: 24
        };

        // bind handlers to SettingsScreen class
        this.changeStyleSheetRule = this.changeStyleSheetRule.bind(this);
    }

    render() {
        return (
            // "consume" the context
            <ThemeContext.Consumer>{(context) => {

                // destructuring
                const {isInverted, normal, inverted, toggleTheme} = context;

                // check theme type (updated anytime the context changes)
                const theme = isInverted ? inverted : normal;

                return (
                    <View style={theme.container}>

                            <Text style={theme.headerText}>Settings</Text>
                            <View style={theme.row}/>
                            <View style={theme.row}>
                                <Text style={theme.text}>Invert Colors   </Text>
                                <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        thumbColor={"#e1e6f0"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleTheme}
                                />
                            </View>

                    </View>
                )
            }}</ThemeContext.Consumer>

        );
    }

    changeStyleSheetRule(stylesheet, selector, property, value) {
        // Make the strings lowercase
        selector = selector.toLowerCase();
        property = property.toLowerCase();
        value = value.toLowerCase();

        // Change it if it exists
        for(var i = 0; i < stylesheet.cssRules.length; i++) {
            var rule = stylesheet.cssRules[i];
            if(rule.selectorText === selector) {
                rule.style[property] = value;
                return;
            }
        }
    }
}

export default withNavigation(SettingsScreen);
