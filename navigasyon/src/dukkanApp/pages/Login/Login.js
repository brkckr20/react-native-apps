import React from 'react'
import { View, Text, Image, Alert } from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from './Login.style';
import { Formik } from 'formik';
import usePost from '../../hooks/usePost';

function Login({ navigation }) {

    const { data, post, error, loading } = usePost();

    function handleLogin(values) {
        post('https://fakestoreapi.com/auth/login', values)
    }

    if (error) {
        Alert.alert("Dükkan", "Bir hata oluştu!")
    }

    if (data) {
        if (data.status === "Error") {
            Alert.alert("Dükkan", "Kullanıcı bulunamadı!")
        } else {
            navigation.navigate("ProductPage")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Image source={require("../../assets/logom.png")} style={styles.logo} />
            </View>
            <Formik
                initialValues={{
                    username: "",
                    password: ""
                }}
                onSubmit={handleLogin}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <View style={styles.body_container}>
                        <Input value={values.username} placeholder="Kullanıcı adınızı giriniz..." onType={handleChange('username')} iconName="account" />
                        <Input value={values.password} placeholder="Şifrenizi giriniz..." onType={handleChange('password')} iconName="key-variant" isSecure={true} />
                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default Login