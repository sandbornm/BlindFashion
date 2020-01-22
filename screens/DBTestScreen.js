import React from 'react';
import {getItem, writeItem} from '../Api/FetchDescriptions';

import {
    ScrollView,
    StyleSheet,
    Text,
    Button,
    Alert,
    View,
} from 'react-native';

async function getDescription() {
    let item = await getItem("5dc0d7ac3067c0cb54a50ade");
    console.log(JSON.stringify(item[0]));
    document.getElementById("123").innerText = JSON.stringify(item[0],null,2);
    await addDescription();
}

async function addDescription() {
    let item ="5dc0d7ac4567c0cb54a50ade";
    await writeItem(item);
}

export default function DBTestScreen() {
    return (
        <View>
            <Text style={styles.titleText}>
                Test Screen
            </Text>
            <ScrollView>
                <Button
                    title="Add clothing item"
                    onPress={() => Alert.alert("Post",'Button pressed')}
                />
                <Button
                    title="Get clothing item"
                    onPress={getDescription}
                />
            </ScrollView>
            <ScrollView>


            </ScrollView>
            <Text id="123">
                Result
            </Text>

            {/*<ScrollView>*/}
            {/*    <Button*/}
            {/*        title="Get a item"*/}
            {/*        onPress={getItem}*/}
            {/*    />*/}
            {/*</ScrollView>*/}
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
