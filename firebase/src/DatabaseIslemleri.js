import React from 'react';
import { View, Text, Button } from 'react-native';
import database from '@react-native-firebase/database';

const DBIslemleri = () => {

    function checkDB() {
        const reference = database().ref("books/");
        reference.once("value").then(snapshot => {
            const response = snapshot.val();
            console.log(response);
        })
    }

    function listenDB() {
        const reference = database().ref("books/");
        reference.on('value', snapshot => {
            console.log(snapshot.val());
        })
    }

    /* ezer ve üzerine yazar */
    function setDB() {
        const reference = database().ref("car/rentable");
        reference.set({
            brand: "Opel",
            model: "Corsa II",
            price: 100
        })
    }

    function updateDB() {
        const reference = database().ref("car/rentable");
        reference.update({
            model: "Reno",
            brand: "Toyota",
            price: 299
        })
    }

    /* db ye ekleme işlemi */
    function pushDB() {
        const reference = database().ref("car/rentable");
        reference.push({
            brand: "Passat",
            model: "Vw",
            price: 650
        })
    }

    return (
        <View>
            <Text style={{ fontSize: 70 }}>Hello's Firebase ||</Text>
            <Button title='Check DB' onPress={checkDB} />
            <Button title='Listen DB' onPress={listenDB} />
            <Button title='Set DB' onPress={setDB} />
            <Button title='Update DB' onPress={updateDB} />
            <Button title='Push DB' onPress={pushDB} />
        </View>
    )
}

export default DBIslemleri
