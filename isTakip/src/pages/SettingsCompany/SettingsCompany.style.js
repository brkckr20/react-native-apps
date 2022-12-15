import { Dimensions, StyleSheet } from "react-native";
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
        fontSize: 16,
        padding: 8,
        flex: 1
    },
    tableContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.gray300,
        marginBottom: 4,
        borderRadius: 4
    },
    button: {
        marginRight: 8
    }
});