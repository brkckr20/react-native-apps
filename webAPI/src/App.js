import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import axios from 'axios';

function App() {

    function fetchData(){
        const response = axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response)
    }    

    return (
        <SafeAreaView>
            <Text>Test</Text>
            <Button title='Verileri Çek!' onPress={fetchData}/>
        </SafeAreaView>
    )
}

export default App;