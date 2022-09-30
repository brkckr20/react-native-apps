import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, View } from 'react-native';
import music_data from './music_data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const [list, setList] = useState(music_data);

  const renderSong = ({ item }) => <SongCard song={item} />

  const renderSeperator = () => <View style={styles.seperator} />

  /* şarkı ismine göre arama eklendi */
  const onSearch = (text) => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    })

    setList(filteredList);
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={onSearch} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  seperator: {
    borderWidth: 1,
    borderColor: "#e0e0e0"
  }
})

export default App