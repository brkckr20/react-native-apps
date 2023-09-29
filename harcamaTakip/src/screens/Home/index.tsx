import React, {useState} from 'react';
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

import {colors} from '../../colors';

export const Home = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
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
            onPress={() => {}}>
            <Text style={{color: colors.white, textAlign: 'center'}}>
              Kaydet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, backgroundColor: colors.reptileGreen, padding: 10}}
            onPress={() => {}}>
            <Text style={{color: colors.white, textAlign: 'center'}}>Yeni</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
