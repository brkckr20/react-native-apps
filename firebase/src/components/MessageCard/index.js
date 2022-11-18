import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { formatDistance, parseISO } from 'date-fns'
import { tr } from 'date-fns/locale'

const green = "#007D72";

const MessageCard = ({ messages, onBanane }) => {

    const formattedDate = formatDistance(parseISO(messages.date), new Date(), { addSuffix: true, locale: tr })
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.head_username}>{messages.username}</Text>
                <Text style={styles.head_date}>{formattedDate}</Text>
            </View>
            <View>
                <Text style={styles.text}>{messages.text}</Text>
                <TouchableOpacity style={styles.btn} onPress={onBanane}>
                    {
                        !messages.dislike && (
                            <View>
                                <Text>{messages.dislike}</Text>
                            </View>
                        )
                    }
                    <Text style={styles.btn_text}>bana ne?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: green,
        margin: 5,
        padding: 10,
        borderRadius: 10
    },
    head: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10
    },
    head_username: {

    },
    head_date: {
        fontStyle: "italic"
    },
    text: {
        fontWeight: "bold",
        color: "white"
    },
    btn: {
        backgroundColor: "white",
        maxWidth: 100,
        justifyContent: "flex-end",
        marginTop: 10,
        borderRadius: 50

    },
    btn_text: {
        color: green,
        textAlign: "center",
    }
})

export default MessageCard;