import React from 'react';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ScanScreen from '../screens/ScanScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SettingsScreen from '../screens/SettingsScreen';
import styles from '../universalStyle.js';


const platformConfig = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});





const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            accessibilityLabel: "Home",
            navigationOptions: {
                tabBarLabel: <Text style={styles.tabBarInfoText}> Home </Text>,
                tabBarIcon: ({ focused }) => ( <TabBarIcon focused={focused} name='ios-home'/>),
            }
        },
        Login: {
            screen:  LoginScreen,
            accessibilityLabel: "Log in",

            navigationOptions: {
                tabBarLabel: <Text style={styles.tabBarInfoText}> User Login </Text>,
                tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name='ios-lock' color={'black'} />)
            }
        },
        SignUp: {
            screen:  SignUpScreen,
            accessibilityLabel: "Sign up",
            navigationOptions: {
                tabBarLabel: <Text style={styles.tabBarInfoText}> Sign Up </Text>,
                tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name='ios-lock' color={'white'} />)
            }
        },
        Scan: {
            screen: ScanScreen,
            accessibilityLabel: "Scan",
            navigationOptions: {
                tabBarLabel: <Text style={styles.tabBarInfoText}> Scan </Text>,
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused}  name='ios-camera' />
                ),
            }
        },
        Settings: {
            screen: SettingsScreen,
            accessibilityLabel: "Settings",
            navigationOptions: {
                tabBarLabel: <Text style={styles.tabBarInfoText}> Settings </Text>,
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused}  name='ios-settings' />

                ),
            }
        }
    },
    {
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: 'lightblue' },
        platformConfig
    }
);

export default createAppContainer(TabNavigator);
