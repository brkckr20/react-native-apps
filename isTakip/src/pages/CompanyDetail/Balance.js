import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import database from '@react-native-firebase/database';
import parsedData from '../../utils/parsedData';
import styles from './styles';
import SummaryCard from '../../components/SummaryCard';
import moneyFormat from '../../utils/moneyFormat'


const Balance = ({ params }) => {
    const { name, slug, user } = params.params;
    const [productList, setProductList] = useState([]);
    const [receivedList, setReceivedList] = useState([]);
    const [loading, setLoading] = useState(false);

    const filteredProduct = productList.filter((i) => i.firma === slug && i.user === user);
    const filteredMoney = receivedList.filter((i) => i.firma === slug && i.user === user);

    const sumSendMeter = filteredProduct.reduce((acc, object) => {
        return acc + parseFloat(object.metre)
    }, 0);

    const sumSendMeterPrice = filteredProduct.reduce((acc, object) => {
        return acc + (parseFloat(object.metre) * parseFloat(object.birimFiyat))
    }, 0);

    const sumReceivedMoney = filteredMoney.reduce((acc, object) => {
        return acc + parseFloat(object.alinanMiktar)
    }, 0);

    const balance = sumSendMeterPrice - sumReceivedMoney




    useEffect(() => {
        setLoading(true)
        database().ref("cloths").on("value", snapshot => {
            setProductList(parsedData(snapshot.val()))
        });
        database().ref("moneys").on("value", snapshot => {
            setReceivedList(parsedData(snapshot.val()))
        });
        setLoading(false);
    }, [sumSendMeter, sumSendMeterPrice, sumReceivedMoney])



    return (
        <View style={styles.sendProductContainer}>
            {
                loading ? (
                    <ActivityIndicator size={40} color={colors.main_green} />
                ) : (
                    <View>
                        <Text style={styles.infoText}>Özet Bilgiler - ({name})</Text>
                        <SummaryCard iconName="ruler" sum={sumSendMeter} title="Gönderilen Bez Miktarı" birim="MT" />
                        <SummaryCard iconName="currency-usd" variant='tile' sum={moneyFormat(sumSendMeterPrice)} title="Gönderilen Bez Tutarı" birim="TL" />
                        <SummaryCard iconName="cash" variant='darkBlue' sum={moneyFormat(sumReceivedMoney)} title="Alınan Para Tutarı" birim="TL" />
                        <SummaryCard iconName="currency-try" type="balance" balance={moneyFormat(balance)} title="Bakiye Durumu" birim="TL" />
                    </View>
                )
            }

        </View>
    )
}

export default Balance;