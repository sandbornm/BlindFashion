import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ScanScreen from '../screens/ScanScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UserCloset from '../screens/UserCloset';
import Credit from '../screens/CreditScreen';

const rootNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Login: {
            screen:  LoginScreen,
            navigationOptions: {
                title: "",
                headerLeft: null,
            },
        },
        SignUp: {
            screen:  SignUpScreen,
        },
        Scan: {
            screen: ScanScreen,
        },
        Settings: {
            screen: SettingsScreen,
        },
        UserCloset: {
            screen: UserCloset,
        },
        Credit: {
            screen: Credit,
        },
    },

);

export default createAppContainer(rootNavigator);
