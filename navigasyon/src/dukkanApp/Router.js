import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Product from './pages/Product';
import Detail from './pages/Detail';
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux';
import Loading from './components/Loading';

const Stack = createNativeStackNavigator();

function Router() {
    const userSession = useSelector(s => s.user)
    const isAuthLoading = useSelector(s => s.isAuthLoading)

    return (
        <NavigationContainer>
            {
                isAuthLoading ? (<Loading />) : !userSession ? (
                    <Stack.Navigator>
                        <Stack.Screen
                            name='LoginPage'
                            component={Login}
                            options={
                                {
                                    headerShown: false,
                                }
                            }
                        />
                    </Stack.Navigator>
                ) : (
                    <>
                        <Stack.Navigator>
                            <Stack.Screen
                                name='ProductPage'
                                component={Product}
                                options={
                                    {
                                        title: 'Dükkan',
                                        headerStyle: { backgroundColor: '#4267B2' },
                                        headerTitleStyle: { color: 'white' }
                                    }} />
                            <Stack.Screen
                                name='DetailPage'
                                component={Detail}
                                options={
                                    {
                                        title: 'Detaylar',
                                        headerStyle: { backgroundColor: '#4267B2' },
                                        headerTitleStyle: { color: 'white' },
                                        headerTintColor: 'white'
                                    }}
                            />
                        </Stack.Navigator>
                    </>
                )
            }



        </NavigationContainer >
    )
}

export default Router;