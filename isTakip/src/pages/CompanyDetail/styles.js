import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export default StyleSheet.create({
    sendProductContainer: {
        backgroundColor: "white",
        flex: 2,
        padding: 10
    },
    infoText: {
        color: "black",
        marginBottom: 5,
        fontSize: 16
    },
    button: {
        backgroundColor: colors.bg_gray,
        height: 50,
        borderRadius: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: colors.border_color,
        marginBottom: 12,
    },
    buttonText: {
        color: "black",
        paddingTop: 13
    }
});