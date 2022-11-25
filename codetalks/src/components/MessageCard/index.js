import React from 'react';
import { View, Text } from 'react-native';
import styles from './MessageCard.style'

const MessageCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.sender}>{item.sender}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>
            <View>
                <Text style={styles.message}>{item.message}</Text>
            </View>
        </View>
    )
}

export default MessageCard;