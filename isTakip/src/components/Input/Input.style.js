import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.bg_gray,
        height: 50,
        borderRadius: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: colors.border_color,
        marginBottom: 12,
        color: "black"
    },
    container_disable: {
        backgroundColor: "#c3c3c3",
        height: 50,
        borderRadius: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: colors.border_color,
        marginBottom: 12,
        color: "black"
    },
    view_container: {
        position: "relative",
    },
    icon: {
        position: "absolute",
        right: 14,
        top: 14,
    }
})