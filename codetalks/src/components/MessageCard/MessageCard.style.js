import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 8,
        padding: 8,
        borderRadius: 8
    },
    inner_container: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    sender: {
        color: "gray",
        fontWeight: "light",
        fontSize: 14
    },
    date: {
        color: "gray",
        fontWeight: "light",
        fontStyle: 'italic'
    },
    message: {
        color: "black",
        fontSize: 18,
        marginTop: 5
    }
})