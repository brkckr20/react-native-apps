import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color="blue" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: "white",
        bottom: 100,
        alignSelf: "center",
        padding: 10,
        borderRadius: 10,
        borderColor: "#e0e0e0"
    }
});


export default Loading;

