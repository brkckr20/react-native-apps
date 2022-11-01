import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// components import
import HeaderBar from './components/HeaderBar';
//pages imports
import Home from './pages/Home';
import Detail from './pages/Detail';
import { colors } from './utils/colors';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='HomeScreen' component={Home} options={{ headerTitle: (props) => <HeaderBar {...props} /> }} />
                    <Stack.Screen name='DetailScreen' component={Detail}
                        options={{
                            headerTintColor: colors.mainPink,
                            headerTitle: (props) => <HeaderBar {...props} />
                        }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}


export default Router