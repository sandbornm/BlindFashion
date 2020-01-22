import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import styles from './universalStyle.js';

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
      <View style={styles.container}>
          <View>
              <Text style={styles.headerText}>This is the settings page</Text>
            <Text style={styles.helpLinkText}>To modify, go to BlindFashion/screens/SettingsScreen</Text>
          </View>

      </View>
  );
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

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