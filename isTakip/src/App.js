import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import AppHeader from './components/AppHeader';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 10 }}>
            <AppHeader text="Kayıt Ol" icon="X" rightText="Giriş" />
        </SafeAreaView>
    )
}

export default App;