import { StyleSheet } from "react-native";
import { colors } from "../../colors";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main_bg_orange,
        alignItems: "center",
        justifyContent: "center"
    },
    banner: {
        fontSize: 25,
        marginBottom: 150,
        color: colors.text_color
    }
})