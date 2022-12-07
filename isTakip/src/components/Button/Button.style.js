import { StyleSheet } from "react-native";
import { colors } from '../../assets/colors'
export default StyleSheet.create({
    container: {
        backgroundColor: colors.main_green,
        borderRadius: 100,
        marginBottom: 8
    },
    text: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        paddingVertical: 14
    },
    loading: {
        paddingVertical: 10
    }
})