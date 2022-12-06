import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../assets/colors';
import AppHeader from '../../components/AppHeader';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './Register.style';

const Register = () => {
    return (
        <View style={styles.container}>
            <AppHeader text="Kayıt Ol" iconName="close" iconSize={25} iconColor={colors.gray300} rightText="Giriş" />
            <View style={styles.content}>
                <View style={styles.icon}>
                    <Icon name='account-plus-outline' color={colors.main_green} size={100} />
                </View>
                <Input placeholder="Kullanıcı Adı" />
                <Input placeholder="Şifre" isSecure={true} />
                <Input placeholder="Şifre Tekrar" isSecure={true} />
                <Button buttonText="Gönder" />
            </View>
        </View>
    )
}

export default Register