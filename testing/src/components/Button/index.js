import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.style'

const Button = ({ title, onClick, theme = "primary" }) => {
    return (
        <TouchableOpacity testID='button-touchable' onPress={onClick} style={styles[theme].container}>
            <Text testID='button-title' style={styles.primary.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button