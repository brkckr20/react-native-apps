import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './DashboardCard.style'

const DashboardCard = ({ count }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mevcut Firmalar</Text>
            <View style={styles.innerContainer}>
                <Icon name='office-building-outline' size={50} color="white" />
                <Text style={styles.innerText}>{count}</Text>
            </View>
        </View>
    )
}

export default DashboardCard