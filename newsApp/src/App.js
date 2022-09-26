import React from 'react';
import { SafeAreaView, View, FlatList, ScrollView, StyleSheet, Image, Dimensions, Text } from 'react-native';
import news_data from './news_data.json';
import banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard';
import Banner from './components/Banner';


function App() {

  const renderNews = ({ item }) => <NewsCard news={item} />

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <Banner bannerData={banner_data} />
        )}
        keyExtractor={(item, index) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1"
  },
  header_text: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
    paddingLeft: 10,
  }
})

export default App;