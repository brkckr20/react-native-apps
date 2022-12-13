import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './Button.style';

const Button = ({ buttonText, onPress, loading }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {
                loading ? (<ActivityIndicator style={styles.loading} size={30} color="white" />)
                    :
                    (<Text style={styles.text}>{buttonText}</Text>)
            }

        </TouchableOpacity>
    )
}

export default Button;