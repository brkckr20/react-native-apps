import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from "../pages/Dashboard";
import { colors } from "../assets/colors";
import Settings from "../pages/Settings";
import auth from '@react-native-firebase/auth';
import { config } from '../config'
import AddUser from "../pages/AddUser";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    const [currentUser, setCurrentUser] = useState("");

    useEffect(() => {
        const checkUser = () => {
            //mevcut user
            const user = auth().currentUser;
            const curr = user.email;
            setCurrentUser(curr);
        }
        checkUser();
    }, [])

    const Logout = () => {
        return (
            <TouchableOpacity onPress={() => auth().signOut()} >
                <Icon name="exit-to-app" color={colors.main_green} size={30} style={{ marginRight: 10 }} />
            </TouchableOpacity>
        )
    }

    return (
        <Drawer.Navigator screenOptions={{ drawerActiveTintColor: colors.main_green, headerTintColor: colors.main_green }}>
            <Drawer.Screen name="Dashboard" options={{ title: "Yönetim Paneli", headerTintColor: colors.main_green, headerRight: () => <Logout /> }} component={Dashboard} />
            {
                (currentUser === config.user1 || currentUser === config.user2) ? (<Drawer.Screen name="AddUser" options={{ title: "Kullanıcı Ekle" }} component={AddUser} />) : null
            }
            <Drawer.Screen name="Settings" options={{ title: "Ayarlar" }} component={Settings} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator; 