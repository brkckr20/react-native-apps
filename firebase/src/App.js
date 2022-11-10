import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login/Login';
import Sign from './pages/Sign/Sing';

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
                headerShown: false
            }}>
                <Stack.Screen name='AuthStack' component={AuthStack} />
                {/* <Stack.Screen name='SingPage' component={null} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
