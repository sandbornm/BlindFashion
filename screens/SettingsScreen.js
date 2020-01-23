import React from 'react';
import { withNavigation } from 'react-navigation';
import styles from '../universalStyle.js';

import {
  Text,
  View,
} from 'react-native';

function SettingsScreen() {

  return (
      <View style={styles.container}>
          <View>
              <Text style={styles.headerText}>This is the settings page</Text>
            <Text style={styles.bodyText}>To modify, go to BlindFashion/screens/SettingsScreen</Text>
          </View>

      </View>
  );
}

export default withNavigation(SettingsScreen);
