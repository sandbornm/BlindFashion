import React from 'react';
import { withNavigation } from 'react-navigation';
import styles from '../universalStyle.js';
import {
  Image,
  Button,
  ScrollView,
  Text,
  View,
} from 'react-native';

import icon from '../assets/images/icon.png';


function HomeScreen(props) {
  return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>

            <View style={styles.welcomeContainer}>
            <Image source={icon} style={styles.welcomeImage}/>
          </View>

            <View>
              <Text style={styles.headerText}>
                Welcome to Blind Fashion!
              </Text>
          </View>

            <View style={styles.button}>
                <Button  title="Login"
                         color="black"
                         onPress={() => props.navigation.navigate("Login")}
                         />

            </View>
            <View style={styles.button}>
                <Button
                    title="Sign up"
                    color="black"
                    onPress={() => props.navigation.navigate("SignUp")} />
            </View>
            <View style={styles.button}>
                <Button title="Scan"
                        color="black"
                        onPress={() => props.navigation.navigate("Scan")} />
            </View>

        </ScrollView>
      </View>
  );
}



export default withNavigation(HomeScreen);

