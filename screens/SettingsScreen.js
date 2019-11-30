import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  //return <ExpoConfigView />;
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the settings page!</Text>
        <Text>To modify, go to BlindFashion/screens/SettingsScreen</Text>
      </View>
  );
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};
