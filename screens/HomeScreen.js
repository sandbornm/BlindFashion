import * as WebBrowser from 'expo-web-browser';
import React from 'react';
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

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
                source={
                  __DEV__
                      ? require('../assets/images/icon.png')
                      : require('../assets/images/icon.png')
                }
                style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <DevelopmentModeNotice />

          </View>
          <View>
              <Text style={styles.headerText}>
                Welcome to Blind Fashion!
              </Text>
          </View>
          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Help, it didn’t automatically reload!
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
  );
}

HomeScreen.navigationOptions = {
    title: 'Home',
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
        <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
    );

    return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled: your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
    );
  } else {
    return (
        <Text style={styles.developmentModeText}>
          You are not in development mode: your app will run at full speed.
        </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}
