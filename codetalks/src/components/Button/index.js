import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.style'

export const Button = ({ buttonText, variant }) => {
    return (
        <TouchableOpacity style={styles[variant]}>
            <Text style={styles.button[variant]}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

