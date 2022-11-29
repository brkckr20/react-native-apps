import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.style'

const Button = ({ title, onClick }) => {
    return (
        <TouchableOpacity testID='button-touchable' onPress={onClick} style={styles.container}>
            <Text testID='button-title' style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button