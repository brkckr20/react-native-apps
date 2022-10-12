import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard';

function App() {
    // const [loading, setLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userList, setUserList] = useState([]);

    // function fetchData() {
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //         .then(response => console.log(response))
    //         .catch(error => console.log(error))
    // }

    async function withAsnycAwaitFetchData() {
        // setLoading(true);
        let response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setLoading(false);
        setUserList(response.data);
    }

    const renderUser = ({ item }) => <UserCard name={item.name} email={item.email} />

    useEffect(() => {
        withAsnycAwaitFetchData();
    }, [])

    return (
        <SafeAreaView>
            <Text>WebApı</Text>
            {/* <Button title='Verileri Çek!' onPress={fetchData} /> */}
            {/* <Button title='Verileri Çek! 2' onPress={withAsnycAwaitFetchData} /> */}
            {
                loading ? <ActivityIndicator size="large" /> : <FlatList data={userList} renderItem={renderUser} />
            }

        </SafeAreaView>
    )
}

export default App;