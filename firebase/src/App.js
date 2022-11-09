import React from 'react';
import { View, Text, Button } from 'react-native';
import database from '@react-native-firebase/database';

const App = () => {

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

    return (
        <View>
            <Text style={{ fontSize: 70 }}>Hello's Firebase ||</Text>
            <Button title='Check DB' onPress={checkDB} />
            <Button title='Listen DB' onPress={listenDB} />
        </View>
    )
}

export default App
