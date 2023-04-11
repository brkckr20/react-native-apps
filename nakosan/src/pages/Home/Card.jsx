import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './Home.style'

const Card = ({ image, title, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <View>
                    <Image source={{ uri: image }} style={styles.cardImage} />
                </View>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Card;