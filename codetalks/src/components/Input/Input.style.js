import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: Dimensions.get("window").width - 20,
        borderBottomWidth: 1,
        borderColor: "white",
        marginBottom: 10,
        paddingHorizontal: 10,
        color: "black"
    }
})