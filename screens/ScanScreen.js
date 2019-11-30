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

export default function ScanScreen() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is the scanning page!</Text>
            <Text>To modify, go to BlindFashion/screens/ScanScreen</Text>
        </View>
    );
}

ScanScreen.navigationOptions = {
    title: 'Scan',
};
