import React from 'react'
import { Image, Text, View, TouchableWithoutFeedback } from 'react-native'
import { styles } from './Details.style';

const Details = ({ item, onSelected }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelected}>
            <View style={styles.inner_container}>
                <Image style={styles.image} source={{ uri: item.strMealThumb }} />
                <Text style={styles.title}>{item.strMeal}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Details