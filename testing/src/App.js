import React from 'react';
import { SafeAreaView, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import Button from './components/Button';

const App = () => {

    const [list, setList] = React.useState([]);
    const [text, setText] = React.useState("")

    const renderElements = ({ item }) => {
        return <Text>{item}</Text>
    }

    const addToList = () => {
        if (!text) {
            return;
        }
        setList([...list, text])
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Testing</Text>
            <FlatList keyExtractor={(_, i) => i.toString()} testID='list' data={list} renderItem={renderElements} />
            <TextInput testID='input-area' placeholder='Add...' onChangeText={setText} style={styles.input} />
            <Button title="Add" onClick={addToList} />
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        backgroundColor: "gray",
        margin: 10,
        color: "black",
        paddingLeft: 5,
        borderRadius: 10
    }
})