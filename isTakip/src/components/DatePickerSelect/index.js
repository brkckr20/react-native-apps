import React from 'react';
import { Text } from 'react-native';
import DatePicker from 'react-native-date-picker'
import DatePickerButton from '../DatePickerButton';

const DatePickerSelect = ({ open, setOpen, date, setDate }) => {
    return (
        <>
            <Text style={{ color: "gray", marginBottom: 4 }}>Tarih Seçiniz</Text>
            <DatePickerButton title="Open" date={date} onPress={() => setOpen(true)} />
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date);
                }}
                onCancel={() => {
                    setOpen(false)
                }}
                mode="date"
            />
        </>
    )
}
export default DatePickerSelect;