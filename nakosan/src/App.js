import React from 'react';
import Home from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigations/TabNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='HomeScreen' component={Home} />
                <Stack.Screen name='Kurumsal' component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;