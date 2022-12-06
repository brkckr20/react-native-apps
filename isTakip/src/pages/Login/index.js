import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../assets/colors';
import AppHeader from '../../components/AppHeader';
import Input from '../../components/Input';
import styles from './Login.style';

const Login = () => {
    return (
        <View style={styles.container}>
            <AppHeader text="Kayıt Ol" iconName="close" iconSize={25} iconColor={colors.gray300} rightText="Giriş" />
            <View style={styles.content}>
                <Input placeholder="Kullanıcı Adı" />
                <Input placeholder="Şifre" isSecure={true} />
                <Input placeholder="Şifre Tekrar" isSecure={true} />
            </View>
        </View>
    )
}

export default Login