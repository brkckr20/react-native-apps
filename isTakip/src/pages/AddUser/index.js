import React, { useState } from 'react';
import { View } from 'react-native';
import { useFormik } from 'formik';
import Input from '../../components/Input';
import Button from '../../components/Button'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import errorMessageParser from '../../utils/errorMessageParser';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import styles from './AddUser.style';
import UserList from './UserList';
import parsedData from '../../utils/parsedData';

const AddUser = () => {

    const [loading, setLoading] = useState(false);
    const [userList, setUserList] = useState([]);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ""
        },
        onSubmit: async (values, bag) => {
            if (!values.email || !values.password) {
                showMessage({
                    message: "E-mail adresi ve parola alanları boş bırakılamaz!",
                    type: "danger"
                });
                return;
            }
            try {
                setLoading(true)
                await auth().createUserWithEmailAndPassword(values.email, values.password);
                //users tablosuna kayıt işlemleri
                await database().ref("users").push({
                    email: values.email,
                    password: values.password
                })
                showMessage({
                    message: "Kullanıcı oluşturuldu",
                    type: "success"
                })
                bag.resetForm();
                setLoading(false)
            } catch (err) {
                setLoading(true)
                showMessage({
                    message: errorMessageParser(err.code),
                    type: "danger"
                })
                setLoading(false)
            }
        },
    });


    React.useEffect(() => {
        const listenUserList = database().ref("users");
        listenUserList.on("value", snapshot => {
            setUserList(parsedData(snapshot.val()))
        })
    }, [])

    return (
        <View style={styles.container}>
            <Input placeholder="Kullanıcı E-mail adresi" value={formik.values.email} onChangeText={formik.handleChange("email")} autoCapitalize="none" />
            <Input placeholder="Kullanıcı Şifresi" value={formik.values.password} onChangeText={formik.handleChange("password")} autoCapitalize="none" />
            <Button buttonText="Kullancı Kaydet" onPress={formik.handleSubmit} loading={loading} />
            <UserList userList={userList} />
            <FlashMessage position="top" />
        </View>
    )
}

export default AddUser;