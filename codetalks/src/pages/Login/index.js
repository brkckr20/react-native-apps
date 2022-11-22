import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Input from '../../components/Input';
import styles from './Login.style';
import { Button } from '../../components/Button'
import { colors } from '../../colors';

const Login = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.main_bg_orange} />
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