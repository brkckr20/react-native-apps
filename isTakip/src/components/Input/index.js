import React from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../assets/colors';
import styles from './Input.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({ placeholder, isSecure }) => {
    return (
        <View>
            <TextInput
                style={styles.container}
                placeholder={placeholder}
                placeholderTextColor={colors.gray300}
            />
            {
                isSecure && (
                    <Icon name='eye' size={20} color={colors.main_green} style={styles.icon} />
                )
            }
        </View>
    )
}
export default Input;