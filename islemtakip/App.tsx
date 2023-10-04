import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import DatePicker from 'react-native-date-picker';

const db = openDatabase(
  {name: 'takip.db', location: 'default'},
  () => {
    console.log('db bağlantısı başarılı');
  },
  err => {
    console.log(err);
  },
);

function App(): JSX.Element {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [islemler, setIslemler] = useState<any>([]);

  const createTable = async () => {
    const query = `CREATE TABLE IF NOT EXISTS islemler(
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      TARİH DATE,
      ADET INTEGER,
      BIRIM_FIYAT FLOAT,
      TUTAR FLOAT
      );`;

    await db.executeSql(query);
  };

  const kaydet = async () => {
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO islemler (TARİH,ADET,BIRIM_FIYAT,TUTAR) values (?,?,?,?)`,
        [date, 100, 0.75, 100 * 0.75],
        (sqlTxn, res) => {
          console.log(`işlem başarılı`);
          veriGetir();
        },
        error => {
          console.log('error on adding category ' + error);
        },
      );
    });
  };

  const veriGetir = async () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM islemler`,
        [],
        (sqlTxn, res) => {
          console.log('categories retrieved successfully');
          let len = res.rows.length;
          console.log(res.rows);

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              console.log(item);
              results.push({
                id: item.ID,
                tarih: item.TARİH.toLocaleDateString(),
                adet: item.ADET,
                birim_fiyat: item.BIRIM_FIYAT,
              });
            }

            setIslemler(results);
          }
        },
        error => {
          console.log('error on getting categories ' + error);
        },
      );
    });
  };

  useEffect(() => {
    createTable();
    veriGetir();
    console.log('İŞLEMLER TABLOSU', islemler);
  }, []);

  return (
    <SafeAreaView>
      <Button title="Tarih Seç" onPress={() => setOpen(true)} />
      <Text>{date.toLocaleDateString()}</Text>
      <DatePicker
        modal
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
      <Button title="Kaydet!" onPress={kaydet} />
    </SafeAreaView>
  );
}

export default App;
