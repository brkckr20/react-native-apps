import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import DatePickerSelect from '../../components/DatePickerSelect';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';
import { useFormik } from 'formik';

const SendProduct = ({ route }) => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const { name, slug, user } = route.params;

    const formik = useFormik({
        initialValues: {
            metre: "",
            birimFiyat: "",
            tarih: new Date(),
            firma: slug,
            user: user,
            tutar: ""
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <View style={styles.sendProductContainer}>
            <Text style={styles.infoText}>Gönderilen Bez Bilgileri</Text>
            <Input placeholder="Ürün metresi" value={formik.values.metre} onChangeText={formik.handleChange("metre")} type="numeric" />
            <Input placeholder="Ürün birim fiyat" value={formik.values.birimFiyat} onChangeText={formik.handleChange("birimFiyat")} type="numeric" />
            <DatePickerSelect open={open} setOpen={setOpen} date={date} setDate={setDate} />
            <Input placeholder={name} editable={false} />
            <Button buttonText="Kaydet" onPress={formik.handleSubmit} />
        </View>
    )
}

export default SendProduct;