import React from 'react'
import { TextInput, View, Text } from 'react-native';
import styles from './Input.style'

function Input({ label, onChangeText, placeholder }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input_container}>
                <TextInput onChangeText={onChangeText} placeholder={placeholder} />
            </View>
        </View>
    )
}

export default Input