import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from './pages/Register';
import Login from './pages/Login';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';

import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const App = () => {

    const [session, setSession] = useState(false);

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            setSession(!!user)
        })
    }, [])

    console.log(session)
    return (
        <NavigationContainer style={{ flex: 1 }}>
            {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    !session ? (
                        <>
                            <Stack.Screen name='RoomsPage' component={Rooms} />
                            <Stack.Screen name='SingleRoom' component={SingleRoom} />
                        </>

                    ) : (
                        <>
                            <Stack.Screen name='RoomsPage' component={Rooms} />
                            <Stack.Screen name='SingleRoom' component={SingleRoom} />
                        </>
                    )
                }
            </Stack.Navigator> */}

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    !session ? (
                        <>
                            <Stack.Screen name='LoginPage' component={Login} />
                            <Stack.Screen name='RegisterPage' component={Register} />
                        </>
                    ) :
                        (
                            <>
                                <Stack.Screen name='RoomsPage' component={Rooms} />
                                <Stack.Screen name='SingleRoom' component={SingleRoom} />
                            </>
                        )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App