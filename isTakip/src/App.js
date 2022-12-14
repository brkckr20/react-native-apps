import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './assets/colors';
import Login from './pages/Login';
import SettingsCompany from './pages/SettingsCompany'
import SettingsAccount from './pages/SettingsAccount';
import auth from '@react-native-firebase/auth';


/* NAVIGATORS */
import Tabs from './navigations/TabNavigator';
import Root from './navigations/DrawerNavigator'
const Stack = createNativeStackNavigator();

const App = () => {
    const [userSession, setUserSession] = useState("");

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            setUserSession(!!user)
        })
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    !userSession ? (<Stack.Screen name="LoginPage" component={Login} options={{ headerShown: false }} />) : (
                        <>
                            <Stack.Screen name='RootPage' component={Root} options={{ headerShown: false }} />
                            <Stack.Screen name='CompanyDetail' component={Tabs} options={{ title: "Firma Detayları", headerTintColor: colors.main_green }} />
                            <Stack.Screen name='SettingsCompany' component={SettingsCompany} options={{ title: "Firma Ayarları", headerTintColor: colors.main_green }} />
                            <Stack.Screen name='SettingsAccount' component={SettingsAccount} options={{ title: "Hesap Ayarları", headerTintColor: colors.main_green }} />
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;