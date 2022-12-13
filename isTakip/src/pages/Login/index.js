import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../assets/colors';
import AppHeader from '../../components/AppHeader';
import Button from '../../components/Button';
import Input from '../../components/Input';
import auth from '@react-native-firebase/auth';
import errorMessageParser from '../../utils/errorMessageParser';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { useFormik } from 'formik';
import styles from './Login.style';

const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (values) => {
            if (!values.email || !values.password) {
                showMessage({
                    message: "E-mail adresi ve parola alanları boş bırakılamaz!",
                    type: "danger"
                });
                return;
            }
            try {
                setLoading(true);
                await auth().signInWithEmailAndPassword(values.email, values.password);
                setLoading(false);
                navigation.navigate("RootPage")
            } catch (error) {
                setLoading(false);
                showMessage({
                    message: errorMessageParser(error.code),
                    type: "danger"
                })
            }
        }
    });

    return (
        <View style={styles.container}>
            <AppHeader text="Giriş Yap" iconSize={25} iconColor={colors.gray300} />
            <View style={styles.content}>
                <View style={styles.icon}>
                    <Icon name='account' color={colors.main_green} size={100} />
                </View>
                <Input value={formik.values.email} onChangeText={formik.handleChange("email")} placeholder="Kullanıcı Adı" autoCapitalize="none" />
                <Input value={formik.values.password} onChangeText={formik.handleChange("password")} placeholder="Şifre" isSecure={true} autoCapitalize="none" />
                <Button buttonText="Giriş" onPress={formik.handleSubmit} loading={loading} />
                <FlashMessage position="top" />
            </View>
        </View>
    )
}

export default Login