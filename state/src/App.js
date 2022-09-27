import React, { useState } from 'react';
import { SafeAreaView, Text, Button, View } from 'react-native';

const App = () => {

  const [counter, setCounter] = useState(0);

  function updateCounter() {
    setCounter(counter + 1)
  }

  function decreaseCounter() {
    setCounter(counter - 1);
  }

  function updateCounterWithInput(number) {
    setCounter(counter + number)
  }

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 40, color: "black" }}>Counter : {counter}</Text>
      <Button title='Update Counter' onPress={updateCounter} />
      <View style={{ marginBottom: 5 }}></View>
      <Button title='Decrease Counter' onPress={decreaseCounter} />
      <View style={{ marginBottom: 5 }}></View>
      <Button title='With by Input Counter' onPress={() => updateCounterWithInput(5)} />
    </SafeAreaView>
  )
}

export default App