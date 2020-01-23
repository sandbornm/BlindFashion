import React from 'react';
import { withNavigation } from 'react-navigation';
import { Stitch, UserPasswordAuthProviderClient } from 'mongodb-stitch-react-native-sdk';


import styles from '../universalStyle.js';

import {
    View,
    Button,
    TextInput,
    Text,

} from 'react-native';



function SignUpScreen() {
    const [name, onChangeName] = React.useState('Your name');
    const [email, onChangeEmail] = React.useState('Your email');
    const [password, onChangePassword] = React.useState('Your password');

    return (
        <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.formText}>Name</Text>
                    <TextInput
                    style={styles.formInput}
                    onChangeText={text => onChangeName(text)}
                    value={name}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.formText}>Email</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={text => onChangeEmail(text)}
                        value={email}
                    />
                </View>
            <View style={styles.row}>
                <Text style={styles.formText}>Password</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={text => onChangePassword(text)}
                    value={password}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.row}>
                <View style={styles.button}>
                    <Button onPress={() => {onSubmit(email, password)}} title="Submit" />
                </View>
            </View>
        </View>
    );
}

function onSubmit(email, password) {
    console.log("Submitting");
    const emailPasswordClient = Stitch.defaultAppClient.auth
        .getProviderClient(UserPasswordAuthProviderClient.factory);

    emailPasswordClient.registerWithEmail(email, password)
        .then(() => console.log("Successfully sent account confirmation email!"))
        .catch(err => console.error("Error registering new user:", err));
}

export default withNavigation(SignUpScreen);
