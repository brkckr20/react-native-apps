import React from 'react';
import { SafeAreaView } from 'react-native';
import Login from './pages/Login';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 10 }}>
            <Login />
        </SafeAreaView>
    )
}

export default App;