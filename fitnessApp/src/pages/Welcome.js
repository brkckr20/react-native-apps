import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

function Welcome({ navigation }) {

    function goToMemberSign() {
        navigation.navigate("MemberSignScreen")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Fitness App</Text>
            <Button text="Üye kaydı oluştur" onPress={goToMemberSign} />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    header: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: 'bold',
        color: "black"
    }
})

export default Welcome;