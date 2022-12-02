import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Marker } from 'react-native-maps';

const UserMarker = ({ coordinates, userImageUrl, onSelect }) => {
    return (
        <Marker coordinate={coordinates} onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: userImageUrl }} />
            </View>
        </Marker>
    )
}

export default UserMarker;

const styles = StyleSheet.create({
    container: {},
    image: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "gray",
        width: 50,
        height: 50,
        borderRadius: 25
    }
});