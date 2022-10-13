import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList } from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

import ProductCard from '../../components/ProductCard';

const Product = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        const { data: responseData } = await axios.get(Config.API_URL);
        setData(responseData);
    }

    const renderProduct = ({ item }) => <ProductCard product={item}>{item.title}</ProductCard>

    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    )
}

export default Product