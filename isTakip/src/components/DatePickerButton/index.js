import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import moment from 'moment';
import trLocale from 'moment/locale/tr'
import styles from './DatePickerButton.style';

const DatePickerButton = ({ onPress, date }) => {
    moment.updateLocale("tr", trLocale);
    // console.log(moment(date).format('L'))
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{moment(date).format('L')}</Text>
        </TouchableOpacity>
    )
}

export default DatePickerButton;