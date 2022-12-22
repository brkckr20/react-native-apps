import React from 'react';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';

// import styles from './NewDatePicker.style';
import moment from 'moment';

const PickerDate = ({ tarih, onChange }) => {

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: tarih,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };
    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <TouchableOpacity style={styles.container} onPress={showDatepicker}>
            <Text style={styles.text}>{moment(tarih).format('L')}</Text>
        </TouchableOpacity>
    )
}
export default PickerDate


const styles = StyleSheet.create({
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