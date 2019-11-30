import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function ScanScreen() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.headerText}>This is the scanning page</Text>
            <Text>To modify, go to BlindFashion/screens/ScanScreen</Text>
        </View>
    );
}

ScanScreen.navigationOptions = {
    title: 'Scan',
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