import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false // tüm ekranlarda headeri kaldırır
            }}>
                <Stack.Screen
                    name='WellcomeScreen'
                    component={Welcome}
                    options={{ // ekranın headerını kaldırmak
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='MemberSignScreen'
                    component={MemberSign}

                />
                <Stack.Screen
                    name='MemberResultScreen'
                    component={MemberResult}

                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default App