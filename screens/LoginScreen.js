import React from 'react'
import {Button, Text, TextInput, View} from 'react-native';
import {Stitch, AnonymousCredential, UserPasswordCredential} from 'mongodb-stitch-react-native-sdk';

import styles from '../universalStyle.js';
import { withNavigation } from 'react-navigation';

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            currentUserId: undefined,
            client: undefined,
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

        if(this.state.currentUserId) {
            loginStatus = `Currently logged in as ${this.state.currentUserId}!`
        }
        let guestLoginButton = <Button
            onPress={this._onPressLogin}
            title="Login as Guest"/>;


        let logoutButton = <Button
            onPress={this._onPressLogout}
            title="Logout"/>;

        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Login Page</Text>

                <Text> {loginStatus} </Text>
                <View style={styles.row}>
                    <Text style={styles.formText}>Email</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={text => this.setState({email: text})}
                        value={this.state.email}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.formText}>Password</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={text => this.setState({password: text})}
                        value={this.state.password}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.row}>
                    <View style={styles.button}>
                        <Button onPress={() => {this._onPressLogin(this.state.email, this.state.password)}} title="Submit" />
                    </View>
                </View>

                <Text style={styles.bodyText}>or</Text>

                <View style={styles.button}>
                    {this.state.currentUserId !== undefined ? logoutButton : guestLoginButton}
                </View>
            </View>
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
        (credential==null) ? new AnonymousCredential() : new UserPasswordCredential(credential.email, credential.password);
        this.state.client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
            console.log(`Successfully logged in as user ${user.id}`);
            this.setState({ currentUserId: user.id })
        }).catch(err => {
            console.log(`Failed to log in anonymously: ${err}`);
            this.setState({ currentUserId: undefined })
        });
    }

    _onPressLogout() {
        this.state.client.auth.logout().then(user => {
            console.log(`Successfully logged out`);
            this.setState({ currentUserId: undefined })
        }).catch(err => {
            console.log(`Failed to log out: ${err}`);
            this.setState({ currentUserId: undefined })
        });
    }
}

export default withNavigation(LoginScreen);

