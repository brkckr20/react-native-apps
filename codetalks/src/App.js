import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { colors } from './colors';
import Register from './pages/Register';
import Login from './pages/Login';
import Rooms from './pages/Rooms';

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <Rooms />
        </View>
    )
}

export default App