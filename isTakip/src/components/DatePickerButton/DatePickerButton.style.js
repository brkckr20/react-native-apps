import { StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.bg_gray,
        height: 50,
        borderRadius: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: colors.border_color,
        marginBottom: 12,
        color: "black",
        justifyContent: "center"
    },
    text: {
        color: colors.gray300
    }
})