import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DatePickerSelect from '../../components/DatePickerSelect';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';

const ReceivedMoney = () => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    return (
        <View style={styles.sendProductContainer}>
            <Text style={styles.infoText}>Alınan Para Bilgileri</Text>
            <Input placeholder="Alınan Miktar" />
            <Input placeholder="Açıklama" />
            <DatePickerSelect open={open} setOpen={setOpen} date={date} setDate={setDate} />
            <Input placeholder="simteks" />
            <Button buttonText="Kaydet" />
        </View>
    )
}

export default ReceivedMoney;