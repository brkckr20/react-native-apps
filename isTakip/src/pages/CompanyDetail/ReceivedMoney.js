import React, { useState, useEffect } from 'react';
import { Keyboard, Text, View } from 'react-native';
import DatePickerSelect from '../../components/DatePickerSelect';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useFormik } from 'formik';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import database from '@react-native-firebase/database';
import styles from './styles';
import parsedData from '../../utils/parsedData';
import MoneyTable from '../../components/MoneyTable';

const ReceivedMoney = ({ params }) => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [tableData, setTableData] = useState([]);
    const tableHeader = ["Tarih", "Açıklama", "Miktar", "İşlem"];
    const { name, slug, user } = params.params;

    const formik = useFormik({
        initialValues: {
            tarih: date.toString(),
            alinanMiktar: "",
            aciklama: "",
            slug: slug,
            user: user
        },
        onSubmit: async (values, bag) => {
            try {
                database().ref("moneys").push(values);
                showMessage({
                    message: "Alınan para işlemi başarıyla kaydedildi",
                    type: "success"
                })
                bag.resetForm();
                Keyboard.dismiss();
            } catch (error) {
                console.log(error);
            }
        }
    })

    useEffect(() => {
        database().ref("moneys").on("value", snapshot => {
            setTableData(parsedData(snapshot.val()))
        })
    }, [])


    return (
        <>
            <View style={styles.sendProductContainer}>
                <FlashMessage position="top" />
                <Text style={styles.infoText}>Alınan Para Bilgileri</Text>
                <DatePickerSelect open={open} setOpen={setOpen} date={date} setDate={setDate} />
                <Input placeholder="Alınan Miktar" value={formik.values.alinanMiktar} onChangeText={formik.handleChange("alinanMiktar")} type="numeric" />
                <Input placeholder="Açıklama" value={formik.values.aciklama} onChangeText={formik.handleChange("aciklama")} />
                <Input placeholder={name} editable={false} />
                <Button buttonText="Kaydet" onPress={formik.handleSubmit} />
            </View>
            <MoneyTable tableHeader={tableHeader} tableData={tableData} slug={slug} type="money" />
        </>
    )
}

export default ReceivedMoney;