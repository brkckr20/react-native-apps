import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: Dimensions.get("window").height / 3,
        borderRadius: 10,
        padding: 10
    }
})