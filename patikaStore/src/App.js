import React from 'react'
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native'
import Card from './components/Card'
import Search from './components/Search';
import data from './data.json';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <Search />
      <FlatList
        /*  style={styles.list} */
        data={data}
        renderItem={({ item }) => <Card items={item} />}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  title: {
    color: "purple",
    fontSize: 30,
    fontWeight: "bold"
  },
  list: {
    marginTop: 5,
    marginBottom: 100
  }
})

export default App