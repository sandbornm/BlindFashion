import {Platform, StyleSheet} from "react-native";


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        flexWrap: 'wrap'
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'black',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    row: {
        flex: 0.1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    contentContainer: {
        paddingTop: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    button:{
        width: "50%",
        margin: 10,
        backgroundColor: '#bf9beb',
    },
    text:{
        color: "black",
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 200,
        height: 160,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    headerText: {
        fontSize: 40,
        textAlign: 'center',
        color: 'black',
    },
    scanImage: {
        flex: 0.5,
        alignItems: 'center',
        width: "80%",
        height: undefined,
        margin: "5%"
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    bodyText: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center'
    },
    formText: {
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
        width: '35%',
    },
    formInput: {
        height: 40,
        width: '50%',
        backgroundColor:"white",
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft: 10
    }

});
