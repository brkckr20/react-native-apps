import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const MyTab = createBottomTabNavigator();

function Tab() {
    return (
        <NavigationContainer>
            <MyTab.Navigator>
                <MyTab.Screen name='HomeScreenTab' component={HomeScreen} options={{ tabBarBadge: 3 }} />
                <MyTab.Screen name='SettingsScreenTab' component={SettingsScreen} />
            </MyTab.Navigator>
        </NavigationContainer>
    )
}


function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

export default Tab;