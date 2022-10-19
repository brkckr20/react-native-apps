import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        padding: 10,
        flexDirection: 'row',
        borderWidth : 1,
        borderColor : "grey",
        marginBottom : 5
    },
    image: {
        width: 50,
        height: 50,
        resizeMode : 'contain',
    },
    category_name : {
        color : "black",
        fontSize : 20,
        marginLeft : 10,
        textAlignVertical : 'center'
    }
})