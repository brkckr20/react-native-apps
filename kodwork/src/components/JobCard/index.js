import React from 'react';
import { View, Text } from 'react-native'

import styles from './JobCard.style'

const JobCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.category_name}>{item.categories[0].name}{/*  - {item.id} */}</Text>
            <Text style={styles.company}>{item.company.name}</Text>
            <Text style={styles.location}>{item.locations[0].name}</Text>
            <Text style={styles.level}>{item.levels[0].name}</Text>
        </View>
    )
}

export default JobCard