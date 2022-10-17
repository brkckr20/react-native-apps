import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native';
import Config from 'react-native-config';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import useFetch from '../../hooks/useFetch/useFetch';
import styles from './styles'

const Detail = ({ route }) => {

    const { id } = route.params;
    const { data, error, loading } = useFetch(Config.API_URL + `/${id}`);



    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }


    return (
        <SafeAreaView style={styles.container}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <View style={styles.body_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </SafeAreaView>
    )
}

export default Detail