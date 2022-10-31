import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// components import
import HeaderBar from './components/HeaderBar';
//pages imports
import Home from './pages/Home';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={Home} options={{ headerTitle: (props) => <HeaderBar {...props} /> }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Router