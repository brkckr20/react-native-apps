import React from 'react';
import { View, Text, Image } from 'react-native'
import styles from './Card.style'

const Card = ({ items }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Image
                    style={styles.image}
                    source={{ uri: items.imgURL }} />
                <Text style={styles.title}>
                    {items.title}
                </Text>
                <Text>
                    {items.price}
                </Text>
                {
                    !items.inStock && (
                        <Text style={styles.inStock}>
                            STOKTA YOK!
                        </Text>
                    )
                }

            </View>
        </View>
    )
}

export default Card