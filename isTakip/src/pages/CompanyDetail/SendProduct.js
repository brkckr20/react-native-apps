import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DatePickerSelect from '../../components/DatePickerSelect';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';

const SendProduct = () => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    return (
        <View style={styles.sendProductContainer}>
            <Text style={styles.infoText}>Gönderilen Bez Bilgileri</Text>
            <Input placeholder="Ürün metresi" />
            <Input placeholder="Ürün birim fiyat" />
            <DatePickerSelect open={open} setOpen={setOpen} date={date} setDate={setDate} />
            <Input placeholder="hambez" />
            <Button buttonText="Kaydet" />
        </View>
    )
}

export default SendProduct;