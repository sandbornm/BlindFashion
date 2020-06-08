/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
//
// import { AppRegistry, Platform } from 'react-native';
// import App from './App';
// import './globals.js';
//
// AppRegistry.registerComponent('Kumi', () => App);
//
// if (Platform.OS === 'web') {
//     const rootTag = document.getElementById('root') || document.getElementById('main');
//     AppRegistry.runApplication('Kumi', { rootTag });
// }