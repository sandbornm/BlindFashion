import React from 'react';
import {withNavigation} from "react-navigation";
import {ScrollView, Text,View} from "react-native";
import {ThemeContext} from "../contexts/ThemeContext";


function UserCloset(props){
    return(
        <View>
            <Text >
                This is the User Closet
            </Text>
        </View>
    );
}
export default withNavigation(UserCloset);