import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';

function First(props) {

    console.log(props);

    function navigateToPage() {
        props.navigation.navigate("SecondScreen", // diğer ekrana yönlendirme
            {
                username: "burakcakir" //diğer sayfaya parametre gönderme
            });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Hello first !!</Text>
            <Button title='Go To Second' onPress={navigateToPage} />
        </SafeAreaView>
    )
}


export default First;


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