import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../colors'
export default StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: (Dimensions.get("window").width / 2) - 8,
        height: Dimensions.get("window").height / 5,
        marginRight: 5,
        marginBottom: 10,
        overflow: "hidden",
        textAlign: "center",
        borderWidth: 1,
        borderColor: colors.text_color,
        borderRadius: 5
    },
    text: {
        color: colors.main_bg_orange
    }
})