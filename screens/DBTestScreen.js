import React from 'react';
import {ScrollView, StyleSheet, Text, Button, Alert, View} from 'react-native';

export default function DBTestScreen() {
    return (
        <View>
            <Text style={styles.titleText}>
                Test Screen
            </Text>
            <ScrollView>
                <Button
                    title="Add clothing item"
                    onPress={() => Alert.alert('Button pressed')}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});