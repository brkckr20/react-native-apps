import { StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.gray500,
        padding: 10,
        borderRadius: 4,
        elevation: 20,
        shadowColor: 'black',
    },
    top: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    topText: {
        fontSize: 20,
        color: "white"
    },
    sum: {
        fontSize: 18,
        color: "white"
    }
})