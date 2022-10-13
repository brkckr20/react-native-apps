import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Product from './pages/Product';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='ProductPage' component={Product} />
                <Stack.Screen name='DetailPage' component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;