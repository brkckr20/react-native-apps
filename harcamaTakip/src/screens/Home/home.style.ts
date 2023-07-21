import { StyleSheet } from "react-native";
import { colors } from "../../colors";


const baseTopWrapperContentItem = {
    borderRadius: 10,
    padding: 8,
}


export const styles = StyleSheet.create({
    topWrapper: {
        flex: 1, backgroundColor: colors.turuncu
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
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    topWrapperContentMonth: {
        fontSize: 28, color: 'white',
        textAlign: "center",
    },
    topWrapperContentGelir: {
        backgroundColor: colors.reptileGreen,
        ...baseTopWrapperContentItem,
    },


    /* homecontent styles */
    homeContentWrapper: {
        flex:7 ,
        padding: 10,
        backgroundColor : colors.turuncu
    }
})
