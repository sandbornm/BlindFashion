import React from 'react'
import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import {Stitch, AnonymousCredential, UserPasswordCredential} from 'mongodb-stitch-react-native-sdk';

import { withNavigation } from 'react-navigation';
import API from "../Api/Database_API";
import {ThemeContext} from "../contexts/ThemeContext";
import {Ionicons} from "@expo/vector-icons";

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            currentUserId: undefined,
            client: undefined,
            email: "",
            password: "",
            name: "",
        };
        this._loadClient = this._loadClient.bind(this);
        this._onPressLogin = this._onPressLogin.bind(this);
        this._onPressLogout = this._onPressLogout.bind(this);
    }

    componentDidMount() {
        if(Stitch.defaultAppClient == null){
            this._loadClient();
        }else{
            this.setState({ client: Stitch.defaultAppClient });
        }

    }

    render() {
        let loginStatus = "Currently logged out.";

        let guestLoginButton = <Button
            onPress={() => this._onPressLogin(null)}
            color="white"
            title="Login as Guest"/>;


        let logoutButton = <Button
            onPress={this._onPressLogout}
            color="white"
            title="Logout"/>;

        // check if user logged in first...

        //if(this.state.currentUserId) {
        if(global.USERNAME != null) {
            this.state.name = global.USERNAME;
            loginStatus = `Currently logged in as ${this.state.name}!`

            return (
                <ThemeContext.Consumer>{(context) => {

                    // destructuring
                    const {isInverted, normal, inverted, toggleTheme} = context;

                    // check theme type (updated anytime the context changes)
                    const theme = isInverted ? inverted : normal;

                    return (
                        <View style={theme.container}>
                            <Text style={theme.headerText}>{loginStatus}</Text>
                            <View style={theme.button}>
                                {logoutButton}
                            </View>

                        </View>
                    )
                }}</ThemeContext.Consumer>
            );
        }

        return (

            <ThemeContext.Consumer>{(context) => {

                // destructuring
                const {isInverted, normal, inverted, toggleTheme} = context;

                // check theme type (updated anytime the context changes)
                const theme = isInverted ? inverted : normal;

                return (
                    <View style={theme.container}>
                        <View style={theme.settingsButton}>
                            <Ionicons
                                name='ios-settings'
                                size={30}
                                style={{marginLeft:15,marginBottom:-22,marginTop:5}}
                                color="white"
                            />
                            <Button  onPress={() => this.props.navigation.navigate("Settings")}
                                     color="white"
                                     title=""/>
                        </View>
                        <ScrollView contentContainerStyle={theme.contentContainer}>

                        <View>
                            <Text style={theme.headerText}>Login Page</Text>
                        </View>
                        <View>
                            <Text style={theme.text}> {loginStatus} </Text>
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

                        <View style={theme.button}>
                            <Button onPress={() => this._onPressLogin({email: this.state.email, password: this.state.password})}
                                    color="white"
                                    title="Submit" />
                        </View>

                        <Text style={theme.bodyText}>or</Text>

                        <View style={theme.button}>
                            {this.state.currentUserId !== undefined ? logoutButton : guestLoginButton}
                        </View>
                        </ScrollView>
                    </View>
                )
            }}</ThemeContext.Consumer>

        );
    }

    _loadClient() {
        Stitch.initializeDefaultAppClient('blindfashion-gyera').then(client => {
            this.setState({ client: client });

            if(client.auth.isLoggedIn) {
                this.setState({ currentUserId: client.auth.user.id })
            }
        });
    }

    _onPressLogin(credential) {
        const credentialObj = (credential) ? new UserPasswordCredential(credential.email, credential.password) :
            new AnonymousCredential();
        this.state.client.auth.loginWithCredential(credentialObj).then(user => {
            console.log(`Successfully logged in as user ${Object.keys(user.profile)}`);
            let userName = "GuestUser";
            if(credential != null) {
                API.getUser(credential.email).then(result => {
                    if (result.hasOwnProperty("name")) {
                        userName = result.name;
                    }
                    this.setState({name: userName});
                    this.setState({currentUserId: user.id});
                    global.USERNAME = userName;
                    this.forceUpdate();
                });
            } else {
                this.setState({name: userName});
                this.setState({currentUserId: user.id});
                global.USERNAME = userName;
                this.forceUpdate();
            }
        }).catch(err => {
            console.log(`Failed to log in anonymously: ${err}`);
            this.setState({ currentUserId: undefined })
        });
    }

    _onPressLogout() {
        this.state.client.auth.logout().then(user => {
            console.log(`Successfully logged out`);
            global.USERNAME = null;
            this.setState({ currentUserId: undefined })
        }).catch(err => {
            console.log(`Failed to log out: ${err}`);
            this.setState({ currentUserId: undefined })
        });
    }
}

export default  withNavigation(LoginScreen);