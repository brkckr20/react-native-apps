import React from 'react';
import { View, Text, FlatList } from 'react-native';

import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading'
import JobCard from '../../components/JobCard'
import { config } from '../../config'

function Home() {
    const { data, error, loading } = useFetch(config.API_URL);
    if (loading) {
        <Loading />
    }

    if (error) {
        <Text>Bir hata oluştu!</Text>
    }

    function renderJobs({ item }) {
        return <JobCard item={item} />
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList data={data.results} renderItem={renderJobs} />
        </View>
    )
}

export default Home