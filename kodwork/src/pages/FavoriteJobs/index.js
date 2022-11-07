import React from 'react';
import { View, Text } from 'react-native';
import styles from './FavoriteJobs.style';
import { useSelector } from 'react-redux';

const FavoriteJobs = () => {
    const { favoriteJobs } = useSelector(state => state.job);

    console.log("favoriteJobs",favoriteJobs)
    return (
        <View>
            <Text style={styles.title}>FavoriteJobs</Text>
        </View>
    )
}

export default FavoriteJobs