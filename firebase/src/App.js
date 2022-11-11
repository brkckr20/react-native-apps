import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from "react-native-flash-message";
import Login from './pages/Login/Login';
import Sign from './pages/Sign/Sing';
import Messages from './pages/Messages';

const Stack = createNativeStackNavigator();

const App = () => {

    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='LoginPage' component={Login} />
                <Stack.Screen name='SingPage' component={Sign} />
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer style={{ backgroundColor: "black", flex: 1 }}>
            <Stack.Navigator screenOptions={{
                headerShown: true
            }}>
                <Stack.Screen name='AuthStack' component={AuthStack} />
                <Stack.Screen name='MessagesPage' component={Messages} />
            </Stack.Navigator>
            <FlashMessage position="top" />
        </NavigationContainer>
    )
}

export default App
