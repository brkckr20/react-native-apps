import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './Input.style'

function Input({ placeholder, isSecure, value, onChangeText }) {
    return (
        <TextInput placeholder={placeholder} style={styles.container} value={value} secureTextEntry={isSecure} onChangeText={onChangeText} autoCapitalize="none" />
    )
}
export default Input;