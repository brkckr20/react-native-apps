import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SendProduct from '../pages/CompanyDetail/SendProduct';
import ReceivedMoney from '../pages/CompanyDetail/ReceivedMoney';
import Balance from '../pages/CompanyDetail/Balance';
import { colors } from '../assets/colors';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'GönderilenBez') {
                    iconName = focused
                        ? 'animation-outline'
                        : 'animation-outline';
                } else if (route.name === 'AlinanPara') {
                    iconName = focused ? 'briefcase-variant-outline' : 'briefcase-variant-outline';
                } else if (route.name === 'Bakiye') {
                    iconName = focused ? 'bitcoin' : 'bitcoin';
                }
                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: colors.main_green,
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
        })}>
            <Tab.Screen name="GönderilenBez" component={SendProduct} />
            <Tab.Screen name="AlinanPara" component={ReceivedMoney} />
            <Tab.Screen name="Bakiye" component={Balance} />
        </Tab.Navigator>
    )
}

export default Tabs;