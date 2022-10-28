import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { colors } from '../../utils/colors';

function Home() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "" }}>
                <ActivityIndicator size={40} color={colors.mainPink} />
            </View>
        </View>
    )
}

export default Home