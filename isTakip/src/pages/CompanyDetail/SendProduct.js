import React, { useEffect, useState } from 'react';
import { Text, View, Keyboard, ScrollView } from 'react-native';

import Input from '../../components/Input';
import Buttons from '../../components/Button';
import styles from './styles';
import database from '@react-native-firebase/database';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import parsedData from '../../utils/parsedData'
import Table from '../../components/ProductTable';

import DatePicker from 'react-native-modern-datepicker';

const SendProduct = ({ route }) => {

    const { name, slug, user } = route.params;
    const tableHeader = ["Metre", "Br. Fiyat", "Tutar", "Tarih", "İşlem"];
    const [tableData, setTableData] = useState([]);

    const [metre, setMetre] = useState("");
    const [birimFiyat, setBirimFiyat] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    const vals = {
        metre,
        birimFiyat,
        tarih: selectedDate,
        firma: slug,
        user: user,
    }

    const handleFormSubmit = async () => {
        try {
            try {
                database().ref("cloths").push(vals);
                showMessage({
                    message: "Gönderilen bez başarıyla kaydedildi",
                    type: "success"
                })
                bag.resetForm();
                Keyboard.dismiss();
                setMetre("");
                setBirimFiyat("");
                setSelectedDate("");
            } catch (error) {
                console.log(error.code);
            }
        } catch (error) {
        }
    }

    useEffect(() => {
        database().ref("cloths").on("value", snapshot => {
            setTableData(parsedData(snapshot.val()))
        })
    }, [])

    return (
        <>
            <View style={styles.sendProductContainer}>
                <FlashMessage position="top" />
                <Text style={styles.infoText}>Gönderilen Bez Bilgileri</Text>
                <ScrollView>
                    <DatePicker
                        onSelectedChange={date => setSelectedDate(date)}
                        mode="calendar"
                    />
                    <Input placeholder="Ürün metresi" value={metre} onChangeText={setMetre} type="numeric" />
                    <Input placeholder="Ürün birim fiyat" value={birimFiyat} onChangeText={setBirimFiyat} type="numeric" />
                    <Input placeholder={name} editable={false} />
                    <Buttons buttonText="Kaydet" onPress={handleFormSubmit} />
                </ScrollView>
            </View>
            <Table tableHeader={tableHeader} tableData={tableData} slug={slug} />
        </>
    )
}

export default SendProduct;

