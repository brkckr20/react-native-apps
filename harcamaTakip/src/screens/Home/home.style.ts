import { StyleSheet } from "react-native";
import { colors } from "../../colors";


const baseTopWrapperContentItem = {
    borderRadius: 10,
    padding: 8,
}
const baseTopWrapperContent = {
    textAlign: "center",
    color: colors.white,
};


export const styles = StyleSheet.create({
    topWrapper: {
        flex: 1, backgroundColor: 'white'
    },
    topWrapperInner: {
        flex: 1,
        backgroundColor: colors.lightIndigo,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'center',
    },
    topWrapperContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    topWrapperContentGider: {
        backgroundColor: colors.fusionRed,
        ...baseTopWrapperContentItem,
    },
    topWrapperContentTitle: {
        fontSize: 20,
        ...baseTopWrapperContent
    },
    topWrapperContentMoney: {
        textAlign: 'center',
        fontSize: 16,
        color: colors.white,
    },
    topWrapperContentMonth: {
        fontSize: 28, color: 'white'
    },
    topWrapperContentGelir: {
        backgroundColor: colors.reptileGreen,
        ...baseTopWrapperContentItem,
    },
})
