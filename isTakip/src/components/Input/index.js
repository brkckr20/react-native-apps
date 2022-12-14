import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../assets/colors';
import styles from './Input.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({ placeholder, isSecure, value, onChangeText, autoCapitalize, editable = true, type = "default" }) => {
    return (
        <View>
            <TextInput
                style={editable ? styles.container : styles.container_disable}
                placeholder={placeholder}
                placeholderTextColor={editable ? colors.gray300 : "white"}
                value={value}
                onChangeText={onChangeText}
                autoCapitalize={autoCapitalize}
                secureTextEntry={isSecure}
                editable={editable}
                keyboardType={type}
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