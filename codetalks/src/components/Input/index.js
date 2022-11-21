import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './Input.style'

function Input({ placeholder, isSecure }) {
    return (
        <TextInput placeholder={placeholder} style={styles.container} secureTextEntry={isSecure} />
    )
}
export default Input;