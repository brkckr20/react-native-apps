import React, { useEffect, useState } from 'react';
import { Text, View, Keyboard } from 'react-native';
import DatePickerSelect from '../../components/DatePickerSelect';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';
import { useFormik } from 'formik';
import database from '@react-native-firebase/database';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import parsedData from '../../utils/parsedData'
import Table from '../../components/Table';


const SendProduct = ({ route }) => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const { name, slug, user } = route.params;
    const tableHeader = ["Metre", "Br. Fiyat", "Tutar", "Tarih", "İşlem"];
    const [tableData, setTableData] = useState([]);

    const formik = useFormik({
        initialValues: {
            metre: 0,
            birimFiyat: 0,
            tarih: date.toString(),
            firma: slug,
            user: user,
        },
        onSubmit: async (values, bag) => {
            try {
                await database().ref("cloths").push(values);
                showMessage({
                    message: "Gönderilen bez başarıyla kaydedildi",
                    type: "success"
                })
                bag.resetForm();
                Keyboard.dismiss();
            } catch (error) {
                console.log(error.code);
            }
        }
    })

    useEffect(() => {
        database().ref("cloths").on("value", snapshot => {
            setTableData(parsedData(snapshot.val()))
        })
    }, [])

    return (
        <View style={styles.sendProductContainer}>
            <FlashMessage position="top" />
            <Text style={styles.infoText}>Gönderilen Bez Bilgileri</Text>
            <DatePickerSelect open={open} setOpen={setOpen} date={date} setDate={setDate} />
            <Input placeholder="Ürün metresi" value={formik.values.metre} onChangeText={formik.handleChange("metre")} type="numeric" />
            <Input placeholder="Ürün birim fiyat" value={formik.values.birimFiyat} onChangeText={formik.handleChange("birimFiyat")} type="numeric" />
            <Input placeholder={name} editable={false} />
            <Button buttonText="Kaydet" onPress={formik.handleSubmit} />
            <Text style={{ color: "black", borderBottomWidth: 1, borderColor: "lightgray" }}>Bilgiler</Text>
            <Table tableHeader={tableHeader} tableData={tableData} slug={slug} />
        </View>
    )
}

export default SendProduct;

