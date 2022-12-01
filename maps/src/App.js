import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';
import axios from 'axios'
import Loading from './components/Loading';

const KEY = "https://random-data-api.com/api/v2/users?size=20"

const App = () => {
    const [values, setValues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get(KEY);
            setValues(data);
            setLoading(false)
        }
        fetch();
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView style={{ flex: 1 }} />
            {
                loading && (
                    <Loading />
                )
            }
        </SafeAreaView>
    )
}

export default App;