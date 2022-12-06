import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './AppHeader.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppHeader = ({ iconName, leftText, iconSize, iconColor, text, rightText }) => {
    return (
        <View style={styles.container}>
            {
                iconName && (
                    <TouchableOpacity>
                        <Icon name={iconName} size={iconSize} color={iconColor} />
                    </TouchableOpacity>
                )
            }
            <Text style={styles.headerText}>{text}</Text>
            {
                rightText && (
                    <TouchableOpacity>
                        <Text style={styles.rightText}>{rightText}</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

export default AppHeader;