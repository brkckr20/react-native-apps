import React from 'react';
import { SafeAreaView } from 'react-native';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import SettingsCompany from './pages/SettingsCompany';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 10 }}>
            <SettingsCompany />
        </SafeAreaView>
    )
}

export default App;