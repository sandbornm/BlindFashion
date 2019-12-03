import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            currentUserId: undefined,
            client: undefined
        };
        this._loadClient = this._loadClient.bind(this);
        this._onPressLogin = this._onPressLogin.bind(this);
        this._onPressLogout = this._onPressLogout.bind(this);
    }

    componentDidMount() {
        this._loadClient();
    }

    render() {
        let loginStatus = "Currently logged out."

        if(this.state.currentUserId) {
            loginStatus = `Currently logged in as ${this.state.currentUserId}!`
        }
        let loginButton = <Button
            onPress={this._onPressLogin}
            title="Login"/>

        let logoutButton = <Button
            onPress={this._onPressLogout}
            title="Logout"/>

        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>This is the login page</Text>
                <Text>To modify, go to BlindFashion/screens/LoginScreen</Text>

                <Text> {loginStatus} </Text>
                {this.state.currentUserId !== undefined ? logoutButton : loginButton}
            </View>
        );
    }

    _loadClient() {
        Stitch.initializeDefaultAppClient('blindfashion-gyera').then(client => {
            this.setState({ client });

            if(client.auth.isLoggedIn) {
                this.setState({ currentUserId: client.auth.user.id })
            }
        });
    }

    _onPressLogin() {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 30,
        textAlign: 'center'
    },
});
