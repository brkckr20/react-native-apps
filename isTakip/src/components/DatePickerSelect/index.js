import React from 'react';
import DatePicker from 'react-native-date-picker'
import DatePickerButton from '../DatePickerButton';

const DatePickerSelect = ({ open, setOpen, date, setDate }) => {
    return (
        <>
            <DatePickerButton title="Open" onPress={() => setOpen(true)} />
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
            />
        </>
    )
}
export default DatePickerSelect;