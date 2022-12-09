import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../assets/colors';
import AppHeader from '../../components/AppHeader';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './Login.style';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppHeader text="Giriş Yap" iconSize={25} iconColor={colors.gray300} />
            <View style={styles.content}>
                <View style={styles.icon}>
                    <Icon name='account' color={colors.main_green} size={100} />
                </View>
                <Input placeholder="Kullanıcı Adı" />
                <Input placeholder="Şifre" isSecure={true} />
                <Button buttonText="Giriş" onPress={() => navigation.navigate("RootPage")} />
            </View>
        </View>
    )
}

export default Login