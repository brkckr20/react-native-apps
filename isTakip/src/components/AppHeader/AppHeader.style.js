import { StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';

export default StyleSheet.create({
    container: {
        height: 36,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerText: {
        color: "black",
        fontSize: 30
    },
    icon: {
        color: colors.gray300,
        fontSize: 20
    },
    rightText: {
        color: colors.main_green,
        fontSize: 16,
        fontWeight: "500"
    }
})