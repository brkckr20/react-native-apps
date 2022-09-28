import React, { useState } from 'react';
import { SafeAreaView, Text, Button, View,FlatList,Switch } from 'react-native';


const data = [
  {
    id : 0,
    name : "cafe.exe",
    isFavorite : true
  },
  {
    id : 1,
    name : "kafakafe",
    isFavorite : false
  },
  {
    id : 2,
    name : "BugG",
    isFavorite : false
  },
  {
    id : 3,
    name : "Rock'n Coke",
    isFavorite : true
  },
  {
    id : 4,
    name : "Drink do()",
    isFavorite : true
  },
  {
    id : 5,
    name : "esc",
    isFavorite : false
  },
]

const App = () => {

  const [counter, setCounter] = useState(0);

  const [cafeList,setCafeList] = useState(data);
  const [showFavorite,setShowFavorite] = useState(false);

  function updateCounter() {
    setCounter(counter + 1)
  }

  function decreaseCounter() {
    setCounter(counter - 1);
  }

  function updateCounterWithInput(number) {
    setCounter(counter + number)
  }


  function onFavoriteChange(isFavoriteSelected){
    setShowFavorite(isFavoriteSelected);
    isFavoriteSelected ? setCafeList(cafeList.filter(cafe => cafe.isFavorite)): setCafeList(data)
  }

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 40, color: "black" }}>Counter : {counter}</Text>
      <Button title='Update Counter' onPress={updateCounter} />
      <View style={{ marginBottom: 5 }}></View>
      <Button title='Decrease Counter' onPress={decreaseCounter} />
      <View style={{ marginBottom: 5 }}></View>
      <Button title='With by Input Counter' onPress={() => updateCounterWithInput(5)} />
      <View style={{ marginBottom: 5 }}></View>
      <View>
        <Text  style={{fontSize:25, color:"black"}}>Show Favorites</Text>
      </View>
      <Switch value={showFavorite} onValueChange={onFavoriteChange} />
      <FlatList data={cafeList} renderItem={({item}) => (
        <Text style={{fontSize:25}}>{item.name}</Text>
      )}/>
    </SafeAreaView>
  )
}

export default App