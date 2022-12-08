import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Login from './pages/Login';
import Settings from './pages/Settings';
import SettingsCompany from './pages/SettingsCompany';
import Dashboard from './pages/Dashboard';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Main = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Dashboard' component={Dashboard} />
        </Drawer.Navigator>
    )
}


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginPage" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;