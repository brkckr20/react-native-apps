import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { colors } from './assets/colors';

import Login from './pages/Login';
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard'

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Root = () => {
    return (
        <Drawer.Navigator screenOptions={{ drawerActiveTintColor: colors.main_green }}>
            <Drawer.Screen name="Dashboard" options={{ title: "Anasayfa" }} component={Dashboard} />
            <Drawer.Screen name="Settings" options={{ title: "Ayarlar" }} component={Settings} />
        </Drawer.Navigator>
    )
}


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginPage" component={Login} />
                <Stack.Screen name='RootPage' component={Root} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;