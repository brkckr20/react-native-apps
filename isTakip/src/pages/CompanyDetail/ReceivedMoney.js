import React, { useState, useEffect } from 'react';
import { Keyboard, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import database from '@react-native-firebase/database';
import styles from './styles';
import parsedData from '../../utils/parsedData';
import MoneyTable from '../../components/MoneyTable';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const ReceivedMoney = ({ params }) => {

    const [tableData, setTableData] = useState([]);
    const tableHeader = ["Tarih", "Açıklama", "Miktar", "İşlem"];
    const { name, slug, user } = params.params;


    const [aciklama, setAciklama] = useState("");
    const [alinanMiktar, setAlinanMiktar] = useState("");
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const vals = {
        aciklama,
        alinanMiktar,
        tarih: date.toString(),
        firma: slug,
        user: user,
    }

    const handleFormSubmit = async () => {
        try {
            database().ref("moneys").push(vals);
            showMessage({
                message: "Alınan para işlemi başarıyla kaydedildi",
                type: "success"
            })
            setAciklama("");
            setAlinanMiktar("");
            Keyboard.dismiss();
        } catch (error) {
            console.log(error.code);
        }
    }

    useEffect(() => {
        database().ref("moneys").on("value", snapshot => {
            setTableData(parsedData(snapshot.val()))
        })
    }, [])


    return (
        <>
            <View style={styles.sendProductContainer}>
                <FlashMessage position="top" />
                <Text style={styles.infoText}>Alınan Para Bilgileri</Text>
                <TouchableOpacity title="Tarih Seç" style={styles.button} onPress={() => setOpen(true)}>
                    <Text style={styles.buttonText}>Tarih Seç - {moment(vals.tarih.toString()).format('L')}</Text>
                </TouchableOpacity>
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                    mode="date"
                />
                <Input placeholder="Alınan Miktar" value={alinanMiktar} onChangeText={setAlinanMiktar} type="numeric" />
                <Input placeholder="Açıklama" value={aciklama} onChangeText={setAciklama} />
                <Input placeholder={name} editable={false} />
                <Button buttonText="Kaydet" onPress={handleFormSubmit} />
            </View>
            <MoneyTable tableHeader={tableHeader} tableData={tableData} slug={slug} type="money" />
        </>
    )
}

export default ReceivedMoney;