import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList, Button, Text } from 'react-native';
import Config from 'react-native-config';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import SelectBox from '../../components/SelectBox/SelectBox';
import { useDispatch } from 'react-redux';

const Product = ({ navigation }) => {

    const { data, error, loading } = useFetch(Config.API_URL)
    const dispatch = useDispatch();

    const handleSelectProduct = (id) => {
        navigation.navigate('DetailPage', { id });
    }

    const [filteredText, setFilteredText] = useState(null);

    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleSelectProduct(item.id)}>{item.title}</ProductCard>

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    const filterData = data.filter(item => item.category == filteredText);

    return (
        <SafeAreaView>
            <SelectBox setFilteredText={setFilteredText} />
            <FlatList data={filteredText ? filterData : data} renderItem={renderProduct} />
        </SafeAreaView>
    )
}

export default Product