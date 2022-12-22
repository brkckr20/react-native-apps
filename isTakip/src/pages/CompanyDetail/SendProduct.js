import React, { useEffect, useState } from 'react';
import { Text, View, Keyboard, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';
import { colors } from '../../assets/colors';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import Input from '../../components/Input';
import Buttons from '../../components/Button';
import styles from './styles';
import { useFormik } from 'formik';
import database from '@react-native-firebase/database';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import parsedData from '../../utils/parsedData'
import Table from '../../components/ProductTable';

// import PickerDate from '../../components/NewDatePicker';


const SendProduct = ({ route }) => {

    const d = new Date();
    let time = d.getTime();
    const [tarih, setTarih] = useState(new Date(time));

    // const onDateChange = (event, selectedDate) => {
    //     console.log("event", event);
    //     const currentDate = selectedDate;
    //     setTarih(currentDate);
    // };
    const onDateChange = (d) => {
        console.log("event", d, c);
        console.log("evenc c", c);
    };

    const { name, slug, user } = route.params;
    const tableHeader = ["Metre", "Br. Fiyat", "Tutar", "Tarih", "İşlem"];
    const [tableData, setTableData] = useState([]);

    const initialValues = {
        metre: 0,
        birimFiyat: 0,
        tarih: tarih.toString(),
        firma: slug,
        user: user,
    }

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, bag) => {
            console.log("values tarih ->", values.tarih);
            console.log("tarih a ->", tarih.toString());

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

    const PickerDate = () => {

        const showMode = (currentMode) => {
            DateTimePickerAndroid.open({
                value: tarih,
                onChange: (d, c) => onDateChange(d, c),
                mode: currentMode,
                is24Hour: false,
            });
        };
        const showDatepicker = () => {
            showMode('date');
        };

        return (
            <TouchableOpacity style={styles1.container} onPress={showDatepicker}>
                <Text style={styles1.text}>{moment(tarih).format('L')}</Text>
            </TouchableOpacity>
        )
    }

    const styles1 = StyleSheet.create({
        container: {
            backgroundColor: colors.bg_gray,
            height: 50,
            borderRadius: 10,
            paddingLeft: 10,
            borderWidth: 1,
            borderColor: colors.border_color,
            marginBottom: 12,
            color: "black",
            justifyContent: "center"
        },
        text: {
            color: colors.gray300
        }
    });


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
                <PickerDate tarih={tarih} setTarih={setTarih} onChange={onDateChange} />
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

