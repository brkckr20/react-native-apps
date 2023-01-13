import React from 'react';
import { StatusBar } from 'react-native';
import colors from '../assets/colors';
import Home from './pages/Home';

const App = () => {
    return (
        <>
            <StatusBar backgroundColor={colors.main_color} />
            <Home />
        </>
    )
}

export default App;