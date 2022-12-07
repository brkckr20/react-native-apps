import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1
    },
    settingsContainer: {
        borderWidth: 1,
        borderColor: colors.border_color,
        width: Dimensions.get("window").width / 2 - 12.5,
        marginRight: 5,
        borderRadius: 4,
        alignItems: "center",
        paddingVertical: 12,
        marginBottom: 5
    },
    settingsName: {
        color: "black"
    }
})