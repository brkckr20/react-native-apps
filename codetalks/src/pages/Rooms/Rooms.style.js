import { StyleSheet } from 'react-native';
import { colors } from '../../colors';

export default StyleSheet.create({
    container: { flex: 1 },
    head: {
        backgroundColor: "white",
        color: colors.main_bg_orange,
        textAlign: "center",
        fontSize: 20,
        paddingVertical: 10,
        borderBottomColor: colors.text_color,
        borderBottomWidth: 1
    },
    content: {
        flex: 1,
        backgroundColor: "white",
        padding: 5
    },
    input: {
        color: "black"
    }
});