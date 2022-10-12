import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserCard = (props) => {


    return (
        <View style={styes.container}>
            <Text style={styes.name}>{props.name}</Text>
            <Text style={styes.email}>{props.email}</Text>
        </View>
    )
}

export default UserCard;


const styes = StyleSheet.create({
    container: {
        backgroundColor: "#ececec",
        padding: 5,
        marginVertical: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between'

    },
    name: {
        color: "black",
        fontWeight: "bold"
    }
})