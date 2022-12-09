import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.main_green,
        padding: 8,
        borderRadius: 4,
        marginBottom: 8
    },
    text: {
        color: "white",
        fontSize: 16
    },
    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    innerText: {
        fontSize: 40,
        color: "white"
    }
})