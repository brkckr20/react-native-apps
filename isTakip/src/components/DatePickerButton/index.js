import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './DatePickerButton.style';

const DatePickerButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>Tarih Seçiniz</Text>
        </TouchableOpacity>
    )
}

export default DatePickerButton;