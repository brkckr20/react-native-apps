import React, { useState } from 'react';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';
import moment from 'moment';

import styles from './NewDatePicker.style';

const PickerDate = ({ setTarih }) => {




    /* const [date, setDate] = useState(new Date());
    return (
        <DateTimePicker
            value={date}
            mode="date"
            display='default'
            onChange={date => setDate(date)}
        />
    ) */

    // return (
    //     <TouchableOpacity style={styles.container} onPress={handleDateSelect}>
    //         {/* <Text style={styles.text}>{moment(tarih).format('L')}</Text> */}
    //         <Text style={styles.text}>{"Tarih Seçiniz"}</Text>
    //     </TouchableOpacity>
    // )
}
export default PickerDate
