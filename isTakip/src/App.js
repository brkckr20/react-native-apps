import React from 'react';
import { SafeAreaView } from 'react-native';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 10 }}>
            <Login />
        </SafeAreaView>
    )
}

export default App;