import { StyleSheet } from "react-native";
import { colors } from '../../colors'
export default StyleSheet.create({
    container: {
        position: "absolute",
        right: 20,
        bottom: 20,
        backgroundColor: colors.main_bg_orange,
        paddingHorizontal: 15,
        paddingVertical: 0,
        borderRadius: 50
    },
    text: {
        color: "white",
        fontSize: 40,
        fontWeight: "100"
    }
})