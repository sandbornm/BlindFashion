import React from 'react';
import { Stitch, UserPasswordAuthProviderClient, UserPasswordCredential } from 'mongodb-stitch-react-native-sdk';
import { withNavigation } from 'react-navigation';


import styles from '../universalStyle.js';

import {
    View,
    Button,
    TextInput,
    Text,

} from 'react-native';
import API from "../Api/Database_API";

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
            <View style={styles.container}>
                <Text style={styles.headerText}>Sign Up Page</Text>
                <View style={styles.row}>
                    <Text style={styles.formText}>Name</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={text => this.setState({name: text})}
                        value={this.state.name}
                    />
                </View>
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
                        <Button onPress={() => {onSubmit(this.state.email, this.state.password, this.state.name)}}
                                title="Submit"
                                color="black"
                        />
                    </View>
                </View>
            </View>
        );
    }


}



export default withNavigation(SignUpScreen);
