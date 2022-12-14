import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export default StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingHorizontal: 10,
        backgroundColor: "white",
        flex: 1
    },
    userListContainer: {

    },
    userListHeaderText: {
        color: colors.main_green,
        marginBottom: 5,
        fontSize: 16
    },
    userListTable: {
        backgroundColor: colors.gray300,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    userListHeader: {
        color: "black"
    },
    renderItemContainer: {
        backgroundColor: colors.border_color,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    renderItem: {
        color: colors.main_green
    }
});