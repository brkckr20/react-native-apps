import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import fontNames from '../../../assets/fontNames';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main_color
    },
    top: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: "center"
    },
    topTitle: {
        color: "white",
        fontSize: 50,
        fontFamily: fontNames.firaSemibold
    },
    topSlogan: {
        color: "white",
        fontSize: 18,
        fontFamily: fontNames.firaRegular
    },
    content: {
        flex: 3,
        backgroundColor: colors.main_color
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: colors.secondary_color,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 10
    },
    contentCardWrapper: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: -35
    },
    contentBottom: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    contentBottomImage: {
        width: 300,
        height: 172
    },
    card: {
        backgroundColor: "white",
        width: Dimensions.get("window").width / 2.5,
        alignItems: "center",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    cardImage: {
        width: 120,
        height: 120
    },
    cardTitle: {
        color: colors.main_color,
        fontFamily: fontNames.firaSemibold,
        fontSize: 15,
        marginTop: 12
    }
})