import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from './assets/colors';

import Login from './pages/Login';
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SendProduct from './pages/CompanyDetail/SendProduct';
import ReceivedMoney from './pages/CompanyDetail/ReceivedMoney';
import Balance from './pages/CompanyDetail/Balance';
import SettingsCompany from './pages/SettingsCompany'
import SettingsAccount from './pages/SettingsAccount';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Root = () => {
    return (
        <Drawer.Navigator screenOptions={{ drawerActiveTintColor: colors.main_green }}>
            <Drawer.Screen name="Dashboard" options={{ title: "Anasayfa" }} component={Dashboard} />
            {/* <Drawer.Screen name="AddUser" options={{ title: "Kullanıcı Ekle" }} component={Dashboard} /> */}
            <Drawer.Screen name="Settings" options={{ title: "Ayarlar" }} component={Settings} />
        </Drawer.Navigator>
    )
}

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Gönderilen Bez') {
                    iconName = focused
                        ? 'animation-outline'
                        : 'animation-outline';
                } else if (route.name === 'Alınan Para') {
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
            <Tab.Screen name="Gönderilen Bez" component={SendProduct} />
            <Tab.Screen name="Alınan Para" component={ReceivedMoney} />
            <Tab.Screen name="Bakiye" component={Balance} />
        </Tab.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginPage" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='RootPage' component={Root} options={{ headerShown: false }} />
                <Stack.Screen name='CompanyDetail' component={Tabs} options={{ title: "Firma Detayları", headerTintColor: colors.main_green }} />
                <Stack.Screen name='SettingsCompany' component={SettingsCompany} options={{ title: "Firma Ayarları", headerTintColor: colors.main_green }} />
                <Stack.Screen name='SettingsAccount' component={SettingsAccount} options={{ title: "Hesap Ayarları", headerTintColor: colors.main_green }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;