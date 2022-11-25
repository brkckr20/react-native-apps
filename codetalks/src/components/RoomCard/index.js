import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './RoomCard.style'

const RoomCard = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default RoomCard;