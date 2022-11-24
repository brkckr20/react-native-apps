import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from './colors';
import Register from './pages/Register';
import Login from './pages/Login';
import Rooms from './pages/Rooms';

const Stack = createNativeStackNavigator();

const App = () => {
    function HomeScreen() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        );
    }

    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='LoginPage' component={Login} />
                <Stack.Screen name='RegisterPage' component={Register} />
                <Stack.Screen name='RoomsPage' component={Rooms} />

            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer style={{ flex: 1 }}>
            <AuthStack />
        </NavigationContainer>
    )
}

export default App