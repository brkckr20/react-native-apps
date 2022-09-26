import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';

function App() {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={news_data}
          renderItem={({ item }) => <NewsCard news={item} />}
        />

      </View>
    </SafeAreaView>
  )
}

export default App;