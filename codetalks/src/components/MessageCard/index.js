import React from 'react';
import { View, Text } from 'react-native';
import styles from './MessageCard.style';
import { formatDistance, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';

const MessageCard = ({ item }) => {
    const formattedDate = formatDistance(parseISO(item.date), new Date(), { addSuffix: true, locale: tr })
    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.sender}>{item.sender}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
            <View>
                <Text style={styles.message}>{item.message}</Text>
            </View>
        </View>
    )
}

export default MessageCard;