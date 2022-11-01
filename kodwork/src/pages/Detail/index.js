import React from 'react';
import { View, Text } from 'react-native';

const Detail = ({ route }) => {
    const { id } = route.params;
    return (
        <View>
            <Text style={{ color: "black" }}>Detail page | {id}</Text>
        </View>
    )
}

export default Detail