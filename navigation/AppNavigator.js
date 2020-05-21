import React from 'react';
import {createStackNavigator} from 'react-navigation';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ScanScreen from '../screens/ScanScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SettingsScreen from '../screens/SettingsScreen';

const rootNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Login: {
            screen:  LoginScreen,
        },
        SignUp: {
            screen:  SignUpScreen,
        },
        Scan: {
            screen: ScanScreen,
        },
        Settings: {
            screen: SettingsScreen,
        }
    },

);

export default createAppContainer(rootNavigator);
