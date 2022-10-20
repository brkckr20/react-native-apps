import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import { legacy_createStore as createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const initialState = {
    counter: 0
}

function reducers(state, action) {
    switch (action.type) {
        case "UPDATE_COUNTER":
            return { ...state, counter: state.counter + 1 }
        case "DECREMENT_COUNTER" :
            return {...state, counter : state.counter - 1}
        default:
            return state;
    }
}

function App() {
    return (
        <Provider store={createStore(reducers, initialState)}>
            <SafeAreaView style={{ flex: 1 }}>
                <First />
                <Second />
            </SafeAreaView>
        </Provider>
    )
}

const First = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const handleUpdate = () => dispatch({ type: 'UPDATE_COUNTER' })
    return (
        <View style={{ flex: 1, backgroundColor: "#eceff1" }}>
            <Text style={{ fontSize: 30 }}>First :  {counter}</Text>
            <Button title='Update' onPress={handleUpdate} />
        </View>
    )
}

const Second = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const handleUpdate = () => dispatch({type : "DECREMENT_COUNTER"})

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 30 }}>Second :  {counter}</Text>
            <Button title='Decrement' onPress={handleUpdate}/>
        </View>
    )
}

export default App