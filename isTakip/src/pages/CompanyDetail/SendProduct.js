import React, { useEffect, useState } from 'react';
import { Text, View, Keyboard, TouchableOpacity, StyleSheet } from 'react-native';

import Input from '../../components/Input';
import Buttons from '../../components/Button';
import styles from './styles';
import { useFormik } from 'formik';
import database from '@react-native-firebase/database';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import parsedData from '../../utils/parsedData'
import Table from '../../components/ProductTable';
import PickerDate from '../../components/NewDatePicker'


const SendProduct = ({ route }) => {


    const { name, slug, user } = route.params;
    const tableHeader = ["Metre", "Br. Fiyat", "Tutar", "Tarih", "İşlem"];
    const [tableData, setTableData] = useState([]);

    const [tarih, setTarih] = useState(null)

    const formik = useFormik({
        initialValues: {
            metre: 0,
            birimFiyat: 0,
            tarih: tarih,
            firma: slug,
            user: user,
        },
        onSubmit: async (values, bag) => {
            console.log("->", values);
            // try {
            //     database().ref("cloths").push(values);
            //     showMessage({
            //         message: "Gönderilen bez başarıyla kaydedildi",
            //         type: "success"
            //     })
            //     bag.resetForm();
            //     Keyboard.dismiss();
            // } catch (error) {
            //     console.log(error.code);
            // }
        }
    })

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
                {/* <PickerDate setTarih={setTarih} /> */}
                <Input placeholder="Ürün metresi" value={formik.values.metre} onChangeText={formik.handleChange("metre")} type="numeric" />
                <Input placeholder="Ürün birim fiyat" value={formik.values.birimFiyat} onChangeText={formik.handleChange("birimFiyat")} type="numeric" />
                <Input placeholder={name} editable={false} />
                <Buttons buttonText="Kaydet" onPress={formik.handleSubmit} />
            </View>
            <Table tableHeader={tableHeader} tableData={tableData} slug={slug} />
        </>
    )
}

export default SendProduct;

