import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';

const initialFormValues = {
    usermail: "",
    password: ""
}

function Login({ navigation }) {
    function handleSign() {
        navigation.navigate("SingPage");
    }

    function handleFormSubmit(formValues) {
        console.log(formValues)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>bana ne?</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {
                    ({ handleChange, values, handleSubmit }) => (
                        <>
                            <TextInput value={values.usermail} onChangeText={handleChange('usermail')} style={styles.input} placeholder='E-postanızı giriniz' placeholderTextColor="gray" />
                            <TextInput value={values.password} onChangeText={handleChange('password')} style={styles.input} placeholder='Şifrenizi giriniz' placeholderTextColor="gray" />
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.button_text}>Giriş Yap</Text>
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