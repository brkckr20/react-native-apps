import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './CompanyButtonCard.style'

const CompanyButtonCard = ({ item }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default CompanyButtonCard;