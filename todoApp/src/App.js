import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Form from './components/Form';

const App = () => {

    const [todoList, setTodoList] = useState([])
    const [text, setText] = useState("");

    function handleTodo() {
        setTodoList([...todoList, { id: todoList.length + 1, todo: text, done: false }])
        setText("")
    }


    function setDone(id) {
        const newList = todoList.map(item => {
            if (item.id === id) {
                item.done = !item.done
            };
            return item
        });
        setTodoList(newList);
    }

    function removeTodo(id) {
        const newList = todoList.filter(item => item.id !== id);
        setTodoList(newList);
    }

    const renderItem = ({ item }) => (
        <Text
            style={item.done ? styles.list_text_done : styles.list_text}
            onPress={() => setDone(item.id)}
            onLongPress={() => removeTodo(item.id)}
        >{item.todo}</Text>
    );

    const todoLength = () => {
        const count = todoList.filter(item => item.done !== true);
        return count.length;
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_text}>Yapılacaklar</Text>
                <Text style={styles.header_text_count}>Beklenen ({todoLength()})</Text>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={todoList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View>
                <Form text={text} setText={setText} handleTodo={handleTodo} />
            </View>
        </SafeAreaView>
    )
}

export default App


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00251a",
        padding: 10
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    header_text: {
        color: "#fdd835",
        fontSize: 30
    },
    header_text_count: {
        color: "#fdd835",
        fontSize: 20
    },
    list_text: {
        color: "white",
        fontSize: 20,
        backgroundColor: "#4b830d",
        padding: 5,
        borderRadius: 5,
        marginTop: 5
    },
    list_text_done: {
        color: "white",
        fontSize: 20,
        backgroundColor: "#4b830d",
        padding: 5,
        borderRadius: 5,
        marginTop: 5,
        textDecorationLine: 'line-through'
    }
})