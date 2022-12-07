import React from 'react';
import { View, Text } from 'react-native';
import Input from '../../components/Input'
import Button from '../../components/Button'
import styles from './SettingsCompany.style'

const SettingsCompany = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerInfo}>Firma Ayarları</Text>
            <View>
                <Input placeholder="Firma Adı Giriniz..." />
            </View>
            <View>
                <Button buttonText="Firma Kaydet" />
            </View>
            <View>
                <Text style={styles.tableInfo}>Mevcut Firma Bilgileri</Text>
            </View>
        </View>
    )
}

export default SettingsCompany;