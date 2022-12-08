import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from "../pages/Dashboard";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="DashboardScreen" component={Dashboard} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator; 