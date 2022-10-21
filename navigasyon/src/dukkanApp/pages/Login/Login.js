import React from 'react'
import { View, Text, Image } from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from './Login.style';

function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Image source={require("../../assets/logom.png")} style={styles.logo}/>
            </View>
            <View style={styles.body_container}>
            <Input placeholder="Kullanıcı adınızı giriniz..." />
                <Input placeholder="Şifrenizi giriniz..." />
                <Button text="Giriş Yap"/>
            </View>
        </View>
    )
}

export default Login