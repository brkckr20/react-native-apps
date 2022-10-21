import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Product from './pages/Product';
import Detail from './pages/Detail';
import Login from './pages/Login/Login';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='LoginPage'
                    component={Login}
                    options={
                        {
                            headerShown : false,
                        }
                    }
                    />
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
                            headerTintColor : 'white'
                        }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;