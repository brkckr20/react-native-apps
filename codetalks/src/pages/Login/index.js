import React from 'react';
import { View, Text } from 'react-native';
import Input from '../../components/Input';
import styles from './Login.style';
import { Button } from '../../components/Button'

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.banner}>
                codetalks
            </Text>
            <View style={styles.input_container}>
                <Input placeholder="e-postanızı giriniz..." />
                <Input placeholder="şifrenizi giriniz..." isSecure={true} />
                <View>
                    <Button buttonText="Giriş Yap" variant="primary" />
                    <Button buttonText="Kayıt Ol" variant="secondary" />
                </View>
            </View>
        </View>
    )
}

export default Login;