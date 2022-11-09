import React from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const KullaniciIslemleri = () => {

    const singUp = () => {
        auth().createUserWithEmailAndPassword('burak2043@gmail.com', 'brkckr20')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const singIn = () => {
        auth().signInWithEmailAndPassword('burak2043@gmail.com', 'brkckr20')
            .then(res => console.log("signed"))
            .catch(err => console.log(err))
    }

    const singOut = () => {
        auth().signOut()
            .then(res => console.log("out olundu"))
            .catch(err => console.log(err))
    }


    const checkUser = () => {
        //mevcut use
        const user = auth().currentUser;
        console.log(user)
    }

    return (
        <View>
            <Text style={{ fontSize: 70 }}>Hello's Firebase</Text>
            <Button title='signin' onPress={singIn} />
            <View style={{ marginBottom: 5 }}></View>
            <Button title='signup' onPress={singUp} />
            <View style={{ marginBottom: 5 }}></View>
            <Button title='signout' onPress={singOut} />
            <View style={{ marginBottom: 5 }}></View>
            <Button title='check user' onPress={checkUser} />
        </View>
    )
}

export default KullaniciIslemleri
