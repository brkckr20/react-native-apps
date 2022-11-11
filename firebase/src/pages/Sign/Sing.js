import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';

import { showMessage } from 'react-native-flash-message';
import authErrorMessageParser from '../../utils/authErrorMessageParser';

const initialFormValues = {
    usermail: "",
    password: "",
    repassword: ""
}

function Sign({ navigation }) {
    const [loading, setLoading] = useState(false);

    function handleLogin() {
        navigation.goBack();
    }

    async function handleFormSubmit(formValues) {
        if (formValues.password !== formValues.repassword) {
            showMessage({
                message: "Şifreler uyuşmuyor!",
                type: "danger"
            });
            return;
        }
        try {
            await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password);
            showMessage({
                message: "Kullanıcı oluşturuldu",
                type: "success"
            })
            navigation.navigate("LoginPage")
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
        console.log("first", formValues)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>bana ne?</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {
                    ({ values, handleChange, handleSubmit }) => (
                        <>
                            <TextInput autoCapitalize='none' value={values.usermail} onChangeText={handleChange('usermail')} style={styles.input} placeholder='E-postanızı giriniz' placeholderTextColor="gray" />
                            <TextInput secureTextEntry={true} autoCapitalize='none' value={values.password} onChangeText={handleChange('password')} style={styles.input} placeholder='Şifrenizi giriniz' placeholderTextColor="gray" />
                            <TextInput secureTextEntry={true} autoCapitalize='none' value={values.repassword} onChangeText={handleChange('repassword')} style={styles.input} placeholder='Şifrenizi tekrar giriniz' placeholderTextColor="gray" />
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.button_text}>Kayıt ol</Text>
                            </TouchableOpacity>
                        </>
                    )
                }

            </Formik>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.button_text}>Geri</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
        flex: 1
    },
    header: {
        color: "#fff",
        fontSize: 120,
        marginHorizontal: 10
    },
    input: {
        backgroundColor: "white",
        margin: 10,
        borderRadius: 5,
        color: "black",
        paddingLeft: 10
    },
    button: {
        backgroundColor: "#4267B2",
        margin: 10,
        padding: 5,
        alignItems: "center",
        borderRadius: 5,
    },
    button_text: {
        color: "white",
        fontSize: 18,
    }
})

export default Sign;