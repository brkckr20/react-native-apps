import React from 'react';
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../assets/colors';
import fontNames from '../../assets/fontNames';
import Hakkimizda from '../pages/Kurumsal';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: "white", height: 50 }}>
                <View style={{ backgroundColor: colors.main_color, height: 50, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                    <Text style={{ marginLeft: 10, lineHeight: 50, fontFamily: fontNames.firaSemibold, fontSize: 16, color: "white" }}>{"Geri"}</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen name='Hakkimizda' component={Hakkimizda} />
                </Tab.Navigator>
            </View>
        </View>
    )
}

export default Tabs