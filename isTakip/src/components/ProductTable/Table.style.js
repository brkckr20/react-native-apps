import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    title: {
        color: "black",
        borderBottomWidth: 1,
        borderColor: "lightgray",
        marginBottom: 5,
        fontSize: 16,
        textAlign: "center"
    },
    header: {
        flexDirection: "row",
    },
    headerItem: {
        width: Dimensions.get("window").width / 5,
        color: "white",
        backgroundColor: colors.main_green,
        textAlign: "center"
    },
    content: {
        flexDirection: "row",
        padding: 4,
        borderWidth: 1,
        borderColor: colors.border_color
    },
    contentItem: {
        color: "black",
        width: Dimensions.get("window").width / 5,
        textAlign: "center",
    },
    removeBtn: {
        width: Dimensions.get("window").width / 5,
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },

    headerItemMoney: {
        width: Dimensions.get("window").width / 4,
        color: "white",
        backgroundColor: colors.main_green,
        textAlign: "center"
    },
})