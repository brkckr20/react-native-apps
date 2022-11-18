import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from "react-native-flash-message";
import Login from './pages/Login/Login';
import Sign from './pages/Sign/Sing';
import Messages from './pages/Messages';
import auth from '@react-native-firebase/auth';
import { Text, TouchableOpacity, View } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {

    const [userSession, setUserSession] = useState();

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            setUserSession(!!user)
        })
    }, [])

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
                {
                    !userSession ? (<Stack.Screen name='AuthStack' component={AuthStack} />)
                        : (
                            <Stack.Screen name='MessagesPage' component={Messages} options={
                                {
                                    title: "dertler",
                                    headerTintColor: "darkgreen",
                                    headerRight: () => <TouchableOpacity onPress={() => auth().signOut()}><Text style={{ color: "green", fontSize: 25, }}>X</Text></TouchableOpacity>
                                    /* logout islemleri */
                                }
                            } />
                        )
                }
            </Stack.Navigator>
            <FlashMessage position="top" />
        </NavigationContainer>
    )
}

export default App
