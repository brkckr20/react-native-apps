import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.main_green,
        width: Dimensions.get("window").width / 2 - 12.5,
        marginRight: 5,
        borderRadius: 4,
        alignItems: "center",
        paddingVertical: 12,
        marginBottom: 5,
    },
    text: {
        color: colors.main_green,
    }
})