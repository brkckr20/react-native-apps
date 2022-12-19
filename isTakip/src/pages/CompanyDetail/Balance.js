import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import database from '@react-native-firebase/database';
import parsedData from '../../utils/parsedData';

import styles from './styles';

const Balance = ({ params }) => {
    const { name, slug, user } = params.params;
    const [productList, setProductList] = useState([]);

    const filteredProduct = productList.filter((i) => i.firma = slug)

    useEffect(() => {
        database().ref("cloths").on("value", snapshot => {
            setProductList(parsedData(snapshot.val()))
        })

    }, [])
    return (
        <View style={styles.sendProductContainer}>
            <Text style={styles.infoText}>Bakiye Bilgileri - ({name})</Text>
        </View>
    )
}

export default Balance;