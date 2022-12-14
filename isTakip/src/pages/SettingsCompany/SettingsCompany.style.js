import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export default StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 5
    },
    tableInfo: {
        color: "black",
        textAlign: "center",
        fontSize: 16,
        marginBottom: 8,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: colors.border_color
    },
    tableItem: {
        color: "black",
        backgroundColor: colors.gray300,
        fontSize: 16,
        marginBottom: 5,
        padding: 8,
        borderBottomWidth: 1,
        borderColor: colors.border_color
    }
});