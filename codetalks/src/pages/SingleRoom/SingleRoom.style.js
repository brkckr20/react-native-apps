import { StyleSheet } from 'react-native';
import { colors } from '../../colors';

export default StyleSheet.create({
    container: { flex: 1 },
    header: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        paddingHorizontal: 10
    },
    header_text: {
        color: colors.secondary_orange,
        fontSize: 16
    },
    content: {
        flex: 1,
        backgroundColor: colors.secondary_orange
    },
    content_info: {
        borderStyle: "dotted",
        borderWidth: 1,
        borderColor: "white",
        margin: 5,
        textAlign: "center",
        padding: 8,
        borderRadius: 10
    }
})