import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Input from '../../components/Input'
import Button from '../../components/Button'
import styles from './SettingsCompany.style';
import auth from '@react-native-firebase/auth';
import slugify from 'slugify';
import database from '@react-native-firebase/database';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import parsedData from '../../utils/parsedData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
        } catch (err) {
            console.log(err.code);
        }
    }


    const handleRemoveCompany = async (id) => {
        try {
            await database().ref(`/company/${id}`).remove();
            showMessage({
                message: "Firma silme işlemi başarılı",
                type: "success"
            })
        } catch (err) {
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
                        <View key={item.id} style={styles.tableContainer}>
                            <Text key={item.id} style={styles.tableItem}>{item.name}</Text>
                            <TouchableOpacity style={styles.button} onPress={() => handleRemoveCompany(item.id)}>
                                <Icon name='trash-can-outline' size={25} color="red" />
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </View>

        </View>
    )
}

export default SettingsCompany;