import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import { useDispatch } from 'react-redux';

const Primary = () => {

  const [text, setText] = useState("");
  const [username, setUserName] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({ type: "ADD_NAME", payload: { name: text } })
  }
  const handleClean = () => {
    dispatch({ type: "CLEAN_LIST" })
  }
  const handleSaveUserName = () => {
    dispatch({ type: "SET_USERNAME", payload: { username } })
  }

  return (
    <View>
      <View style={{ borderWidth: 1, margin: 10, padding: 5 }}>
        <TextInput value={text} onChangeText={setText} placeholder="İsim giriniz..." />
        <TextInput value={username} onChangeText={setUserName} placeholder="Kullanıcı adını giriniz..." />
        <Button title='Ekle' onPress={handleAdd} />
        <Button title='User kaydet' onPress={handleSaveUserName} />
        <Button title='Temizle' onPress={handleClean} />
      </View>
    </View>
  )
}

export default Primary