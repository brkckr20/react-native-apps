import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import database from '@react-native-firebase/database';
import parsedData from '../../utils/parsedData';
import sum from '../../utils/collectionOperations';

import styles from './styles';
import SummaryCard from '../../components/SummaryCard';

const Balance = ({ params }) => {
    const { name, slug, user } = params.params;
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);

    const filteredProduct = productList.filter((i) => i.firma === slug);

    const sumSendMeter = filteredProduct.reduce((acc, object) => {
        return acc + parseFloat(object.metre)
    }, 0);

    useEffect(() => {
        setLoading(true)
        database().ref("cloths").on("value", snapshot => {
            setProductList(parsedData(snapshot.val()))
            console.log("sumSendMeter", sumSendMeter);
        });
        setLoading(false)
    }, [])



    return (
        <View style={styles.sendProductContainer}>
            {
                loading ? (
                    <ActivityIndicator size={40} color={colors.main_green} />
                ) : (
                    <View>
                        <SummaryCard sum="121" />
                    </View>
                )
            }

        </View>
    )
}

export default Balance;