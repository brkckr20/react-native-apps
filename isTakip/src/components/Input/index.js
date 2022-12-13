import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../assets/colors';
import styles from './Input.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({ placeholder, isSecure, value, onChangeText, autoCapitalize }) => {
    return (
        <View>
            <TextInput
                style={styles.container}
                placeholder={placeholder}
                placeholderTextColor={colors.gray300}
                value={value}
                onChangeText={onChangeText}
                autoCapitalize={autoCapitalize}
                secureTextEntry={isSecure}
            />
            {
                isSecure && (
                    <Icon name='key' size={20} color={colors.main_green} style={styles.icon} />
                )
            }
        </View>
    )
}
export default Input;