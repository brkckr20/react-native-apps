import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "#bdbdbd",
        padding: 10,
        width: "48.5%",
        margin: 3
    },
    inner_container: {
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get("window").height / 4,
        borderRadius: 10
    },
    title: {
        color: "white",
        fontSize: 20
    },
    price: {

    },
    inStock: {
        color: "red",
        fontSize: 20
    }
})