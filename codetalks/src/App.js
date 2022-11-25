import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from './pages/Register';
import Login from './pages/Login';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';

const Stack = createNativeStackNavigator();

const App = () => {

    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='LoginPage' component={Login} />
                <Stack.Screen name='RegisterPage' component={Register} />
                <Stack.Screen name='RoomsPage' component={Rooms} />
                <Stack.Screen name='SingleRoom' component={SingleRoom} />

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