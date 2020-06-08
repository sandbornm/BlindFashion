import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import {Stitch} from "mongodb-stitch-react-native-sdk";
import ThemeContextProvider from "./contexts/ThemeContext";
import './globals.js';


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    try {
      loadResourcesAsync().then(() => handleFinishLoading(setLoadingComplete));
    } catch (e) {
      console.warn(e);
    }
  }

  return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
        <ThemeContextProvider>
          <AppNavigator/>
        </ThemeContextProvider>
      </View>
  );

  // old code using expo stuff
  /*
  if (!isLoadingComplete && !props.skipLoadingScreen) {
      return (
          <AppLoading
              startAsync={loadResourcesAsync}
              onError={handleLoadingError}
              onFinish={() => handleFinishLoading(setLoadingComplete)}
          />
      );
  } else {
      return (
          <View style={styles.container}>
              {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
              <ThemeContextProvider>
                  <AppNavigator/>
              </ThemeContextProvider>
          </View>
      );
  }
   */
}



async function loadResourcesAsync() {
  /*
  await Promise.all([
      Asset.loadAsync([
          require('./assets/images/robot-dev.png'),
          require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
          // This is the font that we are using for our tab bar
          ...Ionicons.font,
          // We include SpaceMono because we use it in HomeScreen.js. Feel free to
          // remove this if you are not using it in your app
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
  ]);

   */
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

async function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
  await Stitch.initializeDefaultAppClient('blindfashion-gyera');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});
