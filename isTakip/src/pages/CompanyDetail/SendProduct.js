import React, { useEffect, useState } from 'react';
import { Text, View, Keyboard, ScrollView, Button, TouchableOpacity } from 'react-native';

import Input from '../../components/Input';
import Buttons from '../../components/Button';
import styles from './styles';
import database from '@react-native-firebase/database';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import parsedData from '../../utils/parsedData'
import Table from '../../components/ProductTable';

import DatePicker from 'react-native-date-picker'
import moment from 'moment';

const SendProduct = ({ route }) => {

    const { name, slug, user } = route.params;
    const tableHeader = ["Metre", "Br. Fiyat", "Tutar", "Tarih", "İşlem"];
    const [tableData, setTableData] = useState([]);
    const [metre, setMetre] = useState("");
    const [birimFiyat, setBirimFiyat] = useState("");
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const vals = {
        metre,
        birimFiyat,
        tarih: date.toString(),
        firma: slug,
        user: user,
    }

    const handleFormSubmit = async () => {
        try {
            database().ref("cloths").push(vals);
            showMessage({
                message: "Gönderilen bez başarıyla kaydedildi",
                type: "success"
            })
            Keyboard.dismiss();
            setMetre("");
            setBirimFiyat("");
        } catch (error) {
            console.log(error.code);
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
                <TouchableOpacity title="Tarih Seç" style={styles.button} onPress={() => setOpen(true)}>
                    <Text style={styles.buttonText}>Tarih Seç - {moment(vals.tarih.toString()).format('L')}</Text>
                </TouchableOpacity>
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                    mode="date"
                />
                <Input placeholder="Ürün metresi" value={metre} onChangeText={setMetre} type="numeric" />
                <Input placeholder="Ürün birim fiyat" value={birimFiyat} onChangeText={setBirimFiyat} type="numeric" />
                <Input placeholder={name} editable={false} />
                <Buttons buttonText="Kaydet" onPress={handleFormSubmit} />
            </View>
            <Table tableHeader={tableHeader} tableData={tableData} slug={slug} />
        </>
    )
}

export default SendProduct;

