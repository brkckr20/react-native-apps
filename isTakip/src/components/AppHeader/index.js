import React from 'react';
import { View, Text } from 'react-native';
import styles from './AppHeader.style';

const AppHeader = ({ icon, leftText, text, rightText }) => {
    return (
        <View style={styles.container}>
            {
                icon && (
                    <Text style={styles.icon}>{icon}</Text>
                )
            }
            <Text style={styles.headerText}>{text}</Text>
            {
                rightText && (
                    <Text style={styles.rightText}>{rightText}</Text>
                )
            }
        </View>
    )
}

export default AppHeader;