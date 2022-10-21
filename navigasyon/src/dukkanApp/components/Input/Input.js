import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Input.style'

const Input = ({ placeholder, onType }) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} onChangeText={onType} />
        </View>
    )
}

export default Input