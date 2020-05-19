import React from 'react';
import { Stitch, UserPasswordAuthProviderClient, UserPasswordCredential } from 'mongodb-stitch-react-native-sdk';
import { withNavigation } from 'react-navigation';


import styles from '../universalStyle.js';

import {
    View,
    Button,
    TextInput,
    Text, ScrollView,

} from 'react-native';
import API from "../Api/Database_API";
import {ThemeContext} from "../contexts/ThemeContext";
import {Ionicons} from "@expo/vector-icons";

async function login(email, password) {
    const app = Stitch.defaultAppClient;
    const credential = new UserPasswordCredential(email, password);
    await app.auth.loginWithCredential(credential)
    // Returns a promise that resolves to the authenticated user
        .then(authedUser => console.log(`successfully logged in with id: ${authedUser.id}`))
        .catch(err => console.error(`login failed with error: ${err}`))
}

async function onSubmit(email, password, name) {
    console.log("Submitting");
    const emailPasswordClient = Stitch.defaultAppClient.auth
        .getProviderClient(UserPasswordAuthProviderClient.factory);

    try {
        await emailPasswordClient.registerWithEmail(email, password);
        alert("Successfully sent account confirmation email!");
        await login(email, password);
        await API.addUser(email, name);
    }catch (e) {
        alert(e)
    }
}

class SignUpScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            name:"", email:"", password:""
        }
    }

    validatePassword = () => {
        return this.state.password.length >= 6 && this.state.password.length < 129;
    };

    render() {
        return (
            <ThemeContext.Consumer>{(context) => {

                // destructuring
                const {isInverted, normal, inverted, toggleTheme} = context;

                // check theme type (updated anytime the context changes)
                const theme = isInverted ? inverted : normal;

                return(
                    <View style={theme.container}>
                        <ScrollView contentContainerStyle={theme.container}>
                        <View style={theme.settingsButton}>
                            <Ionicons
                                name='ios-settings'
                                size={30}
                                style={{marginLeft:12,marginBottom:-22,marginTop:5}}
                                color="white"
                            />
                            <Button  onPress={() => this.props.navigation.navigate("Settings")}
                                     color="white"
                                     title=""/>
                        </View>

                        <Text style={theme.headerText}>Sign Up Page</Text>
                        <View style={theme.row}>
                            <Text style={theme.formText}>Name</Text>
                            <TextInput
                                style={theme.formInput}
                                onChangeText={text => this.setState({name: text})}
                                value={this.state.name}
                            />
                        </View>
                        <View style={theme.row}>
                            <Text style={theme.formText}>Email</Text>
                            <TextInput
                                style={theme.formInput}
                                onChangeText={text => this.setState({email: text})}
                                value={this.state.email}
                            />
                        </View>
                        <View style={theme.row}>
                            <Text style={theme.formText}>Password</Text>
                            <TextInput
                                style={theme.formInput}
                                onChangeText={text => this.setState({password: text})}
                                value={this.state.password}
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={theme.row}>
                            <View style={theme.button}>
                                <Button onPress={() => {onSubmit(this.state.email, this.state.password, this.state.name)}}
                                        color="white"
                                        title="Submit" />
                            </View>
                        </View>
                        </ScrollView>
                    </View>
                )
            }}</ThemeContext.Consumer>

        );
    }


}



export default withNavigation(SignUpScreen);