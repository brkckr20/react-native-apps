import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { colors } from './colors';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={colors.main_bg_orange} />
            <Login />
        </View>
    )
}

export default App