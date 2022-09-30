import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    inner_container: {
        flex: 1,
        padding: 10,
        justifyContent: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 27,
        color: "black"
    },
    info_container: {
        flexDirection: "row",
        alignItems: "center"
    },
    artist: {
        color: "black"
    },
    year: {
        marginLeft: 10,
        fontWeight: "bold",
        fontSize: 12
    },
    soldOutContainer: {
        borderWidth: 1,
        borderColor: "red",
        padding: 5,
        borderRadius: 7
    },
    soldOutTitle: {
        color: "red",
    },
    content_container: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})