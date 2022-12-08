import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from "../pages/Login";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginPage" component={Login} />
        </Stack.Navigator>
    );
}

export default MainStackNavigator;