import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Input from '../../components/Input'
import Button from '../../components/Button'
import styles from './SettingsCompany.style';
import auth from '@react-native-firebase/auth';
import slugify from 'slugify';
import database from '@react-native-firebase/database';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import parsedData from '../../utils/parsedData'

const SettingsCompany = () => {

    const [companyList, setCompanyList] = useState([]);

    const [name, setName] = useState("");
    const user = auth().currentUser.email;
    const handleFormSubmit = () => {
        if (name === "") {
            showMessage({
                message: "Firma ismi boş geçilemez!",
                type: "danger"
            });
            return false;
        }
        try {
            database().ref("company").push({
                name: name,
                user: user,
                slug: slugify(name, { lower: true, strict: true })
            })
            showMessage({
                message: "Firma kayıt işlemi başarılı",
                type: "success"
            })
            setName("");
        } catch (error) {
            console.log(err.code);
        }
    }

    useEffect(() => {
        database().ref("company").on("value", snapshot => {
            setCompanyList(parsedData(snapshot.val()));
        })
    }, [])



    return (
        <View style={styles.container}>
            <FlashMessage position="top" />
            <View>
                <Input value={name} onChangeText={setName} placeholder="Firma Adı Giriniz..." />
            </View>
            <View>
                <Button buttonText="Firma Kaydet" onPress={handleFormSubmit} />
            </View>
            <View>
                <Text style={styles.tableInfo}>Mevcut Firma Bilgileri</Text>
                {
                    companyList.filter(a => a.user === user).map(item => (
                        <Text key={item.id} style={styles.tableItem}>{item.name}</Text>
                    ))
                }
            </View>

        </View>
    )
}

export default SettingsCompany;