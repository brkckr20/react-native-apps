import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,
        overflow: "hidden"
    },
    inner_container: {
        padding: 5
    },
    image: {
        height: Dimensions.get("window").height / 4 /* ekran yüksekliğinin dörtte birini al */
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        color: "black"
    },
    description: {
        marginTop: 10
    },
    author: {
        fontStyle: "italic",
        textAlign: "right"
    }
})