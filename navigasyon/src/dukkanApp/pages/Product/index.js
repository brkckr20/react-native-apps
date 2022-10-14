import React from 'react'
import { SafeAreaView, FlatList, ActivityIndicator, Text } from 'react-native';
import Config from 'react-native-config';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';

const Product = () => {

    const { data, error, loading } = useFetch(Config.API_URL)
    const renderProduct = ({ item }) => <ProductCard product={item}>{item.title}</ProductCard>

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    )
}

export default Product