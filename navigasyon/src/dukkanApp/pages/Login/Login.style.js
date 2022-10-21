import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex : 1
    },
    logo_container: {
        flex : 1,
        justifyContent : "center",
        backgroundColor : "white"
    },
    body_container: {
        flex :1,
    },
    logo: {
        height: Dimensions.get("window").height / 3,
        width: Dimensions.get("window").width,
        resizeMode : 'contain',
        backgroundColor : "white",
    }
})