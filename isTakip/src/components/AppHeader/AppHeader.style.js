import { StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        paddingTop: 20
    },
    headerText: {
        color: "black",
        fontSize: 26
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