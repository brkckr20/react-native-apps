import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

const Secondary = () => {
  const list = useSelector(s => s.nameList);
  const myUsername = useSelector(s => s.username);
  return (
    <View>
      <Text style={{ fontSize: 30, color : "black" }}>Username : {myUsername} </Text>
      <FlatList keyExtractor={(_, i) => i.toString()} data={list} renderItem={({ item }) => <Text>{item}</Text>} />
    </View>
  )
}

export default Secondary