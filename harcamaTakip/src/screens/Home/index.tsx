import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import SQLite from 'react-native-sqlite-storage';

import {colors} from '../../colors';

const db = SQLite.openDatabase(
  {
    location: 'default',
    name: 'urunTakip1',
  },
  () => {
    console.log('başarılı 3');
  },
  (err: any) => {
    console.log(err);
  },
);

export const Home = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXIST urun (ID INTEGER PRIMARY KEY AUTOINCREMENT, TARIH DATE, MIKTAR NUMERIC, TUTAR REAL)',
        [],
        (tx, err) => {
          console.log('tx', tx);
          console.log('err', err);
        },
      );
    });
  }, []);

  const kayitEkle = () => {
    for (let i = 0; i < 20; i++) {
      const tarih = new Date().toISOString().slice(0, 19).replace('T', ' ');
      const miktar = 1;
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO urun (TARIH, MIKTAR) VALUES (?,?)',
          [tarih, miktar],
          (tx, result) => {
            console.log(tx);
            console.log(result);
          },
        );
      });
    }
  };

  const read = () => {
    db.transaction(tx => {
      tx.executeSql('select * from urun', [], (tx, res) => {
        for (let i = 0; i < res.rows.length; i++) {}
      });
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.mavi, padding: 10}}>
      <StatusBar backgroundColor={colors.mavi} />
      <View>
        <Text
          style={{
            color: colors.white,
            marginBottom: 10,
            fontSize: 18,
            marginTop: 10,
          }}>
          Yapılan işlemler için gerekli bilgileri doldurunuz
        </Text>

        <Text
          style={{
            color: colors.white,
            fontSize: 14,
            marginTop: 10,
          }}>
          Yapılan Miktar
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: colors.white,
            marginTop: 10,
            marginBottom: 10,
            paddingLeft: 10,
            borderRadius: 10,
          }}
          onChangeText={() => {}}
          // value={number}
          keyboardType="numeric"
        />
        <Button
          onPress={() => setOpen(true)}
          title="Tarih Seç"
          color={colors.turuncu}
          accessibilityLabel="Learn more about this purple button"
        />
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <Text
          style={{
            color: colors.white,
            fontSize: 16,
            textAlign: 'center',
            marginTop: 8,
          }}>
          Tarih : {date.toLocaleDateString()}
        </Text>
        <View
          style={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'row',
            gap: 4,
            width: '100%',
          }}>
          <TouchableOpacity
            style={{flex: 1, backgroundColor: colors.lightIndigo, padding: 10}}
            onPress={kayitEkle}>
            <Text style={{color: colors.white, textAlign: 'center'}}>
              Kaydet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, backgroundColor: colors.reptileGreen, padding: 10}}
            onPress={read}>
            <Text style={{color: colors.white, textAlign: 'center'}}>Yeni</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
