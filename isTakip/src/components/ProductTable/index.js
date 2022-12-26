import React from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import styles from './Table.style';
import moment from 'moment';
import trLocale from 'moment/locale/tr';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moneyFormat from '../../utils/moneyFormat'
import database from '@react-native-firebase/database';
import convert from '../../utils/parsedDate';

const Table = ({ tableHeader, tableData, slug, type }) => {
    moment.updateLocale("tr", trLocale);

    const handleProductRemove = (productID) => {
        Alert.alert(
            "Uyarı",
            "İlgili kayıt silinecek. Emin misiniz? \nBu işlem geri alınamaz!",
            [
                {
                    text: "İptal",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Evet", onPress: async () => {
                        try {
                            await database().ref(`/cloths/${productID}`).remove();
                            showMessage({
                                message: "Ürün silme işlemi başarılı",
                                type: "success"
                            })
                        } catch (err) {
                            console.log(err.code);
                        }
                    }
                }
            ]
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bilgiler</Text>
            <View style={styles.header}>
                {
                    tableHeader.map((item, i) => (
                        <Text key={i} style={styles.headerItem}>{item}</Text>
                    ))
                }
            </View>
            <ScrollView>
                {
                    tableData.filter(filterName => filterName.firma === slug).map((item, i) => (
                        <View key={i} style={styles.content}>
                            <Text style={styles.contentItem}>{item.metre} MT</Text>
                            <Text style={styles.contentItem}>{item.birimFiyat} TL</Text>
                            <Text style={styles.contentItem}>{moneyFormat(item.metre * item.birimFiyat)} TL</Text>
                            <Text style={styles.contentItem}>{convert(item.tarih)}</Text>
                            <TouchableOpacity style={styles.removeBtn} onPress={() => handleProductRemove(item.id)}>
                                <Icon name='trash-can-outline' size={20} color="red" />
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Table