import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { showMessage } from 'react-native-flash-message';
import authErrorMessageParser from '../../utils/authErrorMessageParser';

const initialFormValues = {
    usermail: "",
    password: ""
}

function Login({ navigation }) {
    const [loading, setLoading] = useState(false);
    function handleSign() {
        navigation.navigate("SingPage");
    }

    async function handleFormSubmit(formValues) {
        try {
            setLoading(true)
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password);
            setLoading(false);
            navigation.navigate("MessagesPage")
        } catch (error) {
            setLoading(false);
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "danger"
            })
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>bana ne?</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {
                    ({ handleChange, values, handleSubmit }) => (
                        <>
                            <TextInput autoCapitalize='none' value={values.usermail} onChangeText={handleChange('usermail')} style={styles.input} placeholder='E-postanızı giriniz' placeholderTextColor="gray" />
                            <TextInput autoCapitalize='none' secureTextEntry={true} value={values.password} onChangeText={handleChange('password')} style={styles.input} placeholder='Şifrenizi giriniz' placeholderTextColor="gray" />
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                {
                                    loading ? (<ActivityIndicator size={20} color="white" />) : <Text style={styles.button_text}>Giriş Yap</Text>
                                }
                            </TouchableOpacity>
                        </>
                    )
                }

            </Formik>
            <TouchableOpacity style={styles.button} onPress={handleSign}>
                <Text style={styles.button_text} >Kayıt Ol</Text>
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

export default Login;