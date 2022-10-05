import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';

function Second({ navigation, route }) {
    function back() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Hello Second</Text>
            <Text>{route.params.username}</Text>
            <Button title='Go back' onPress={back} />
        </SafeAreaView>
    )
}
export default Second;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black"
    }
})