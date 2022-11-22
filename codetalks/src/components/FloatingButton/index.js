import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './FloatingButton.style'

const FloatingButton = ({ show }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={show}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
    )
}

export default FloatingButton;