import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './SummaryCard.style';

const SummaryCard = ({ sum }) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.topText}>
                    Gönderilen Bez Miktarı
                </Text>
                <Icon name='hanger' size={50} color="white" />
            </View>
            <Text style={styles.sum}>{sum} MT</Text>
        </View>
    )
}
export default SummaryCard