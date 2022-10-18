import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './Category.style';

const CategoryCard = ({items}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri : 'https://www.themealdb.com/images/category/beef.png'}} />
            <Text style={styles.category_name}>Beef</Text>
        </View>
    )
}

export default CategoryCard