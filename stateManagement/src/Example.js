import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Primary from './pages/Primary';
import Secondary from './pages/Secondary';

const Tab = createBottomTabNavigator();

function Example(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Primary' component={Primary} />
                <Tab.Screen name='Secondary' component={Secondary} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Example;