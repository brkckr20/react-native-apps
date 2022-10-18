import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from './screens/Category';

const Router = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name='CategoryScreen'
                    component={Category}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header_title: {
        color: '#FFA500',
        fontSize: 20,
        fontWeight: '700',
        textAlign: "center",
        padding: 5
    },
    categories_container: {
        flex: 1,
        backgroundColor: '#FFA500',
        padding: 5
    }
})

export default Router