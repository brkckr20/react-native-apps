import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export default StyleSheet.create({
    container: {

    },
    header: {
        backgroundColor: colors.main_green,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 4
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 4,
        borderWidth: 1
    },
    contentItem: {
        color: "black",
        width: Dimensions.get("window").width / 5.5,
        textAlign: "center"
    },
    removeBTn: {
        color: "black",
        width: Dimensions.get("window").width / 5.5,
        textAlign: "right",
        paddingRight: 3
    }
})