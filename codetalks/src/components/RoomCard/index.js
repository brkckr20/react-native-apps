import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './RoomCard.style'

const RoomCard = ({ item }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default RoomCard;