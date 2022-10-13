import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container : {
        backgroundColor : '#AEAEAE',
        borderWidth : 1,
        borderColor : "gray",
        margin : 5,
        flexDirection : 'row'
    },
    image : {
        width : 100,
        minHeight : 100,
        resizeMode : 'contain',
        backgroundColor : 'white'
    },
    body_container : {
        flex : 1,
        padding : 5,
        justifyContent : 'space-between'
    },
    title : {
        fontWeight : "bold",
        color : 'black',
        fontSize : 16
    },
    price : {
        textAlign : 'right',
        color : 'black',
        fontSize : 14

    },
})