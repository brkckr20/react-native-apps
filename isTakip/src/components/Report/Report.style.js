import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "#c56cf0",
        padding: 10,
        alignItems: "center",
        borderRadius: 4,
        width: Dimensions.get("window").width / 3
    },
    text: {
        color: "white",
        fontSize: 16
    }
})