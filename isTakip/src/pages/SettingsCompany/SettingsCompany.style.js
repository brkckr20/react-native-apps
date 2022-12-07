import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export default StyleSheet.create({
    container: {

    },
    headerInfo: {
        color: "black",
        textAlign: "center",
        fontSize: 20,
        marginBottom: 8,
        paddingVertical: 8
    },
    tableInfo: {
        color: "black",
        textAlign: "center",
        fontSize: 16,
        marginBottom: 8,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: colors.border_color
    }
});