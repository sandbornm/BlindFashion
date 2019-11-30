import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ScanScreen from '../screens/ScanScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='ios-home'
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused}  name='ios-settings' />
  ),
};

SettingsStack.path = '';

const LoginStack = createStackNavigator(
    {
        Login: LoginScreen,
    },
    config
);

LoginStack.navigationOptions = {
    tabBarLabel: 'Login',
    activeTabStyle: {
            fontWeight: 'bold',
            backgroundColor: 'red',
        },
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name='ios-lock' color={'black'} />
    ),
};

LoginStack.path = '';

const ScanStack = createStackNavigator(
    {
        Scan: ScanScreen,
    },
    config
);

ScanStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused}  name='ios-camera' />
    ),
};

ScanStack.path = '';

const tabNavigator = createMaterialBottomTabNavigator(
    {
        TabHome: {
            screen: HomeStack,
            accessibilityLabel: "Home",
            navigationOptions: {
                tabBarLabel: <Text style={{fontSize: 15}}> Home </Text>,
            }
        },
        TabLogin: {
            screen: LoginStack,
            accessibilityLabel: "Log in",
            navigationOptions: {
                tabBarLabel: <Text style={{fontSize: 15}}> User Login </Text>,
            }
        },
        TabScan: {
            screen: ScanStack,
            accessibilityLabel: "Scan",
            navigationOptions: {
                tabBarLabel: <Text style={{fontSize: 15}}> Scan </Text>,
            }
        },
        TabSettings: {
            screen: SettingsStack,
            accessibilityLabel: "Settings",
            navigationOptions: {
                tabBarLabel: <Text style={{fontSize: 15}}> Settings </Text>,
            }
        }
    },
    {
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: 'lightblue' },
    }
);

tabNavigator.path = '';

export default tabNavigator;
