import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const FloatingActionButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.button_text}>+</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 20,
        right: 20,
        borderRadius: 50,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4267B2"
    },
    button_text: {
        fontSize: 28,
        color: "white",
        fontWeight: "100"
    }
})


export default FloatingActionButton