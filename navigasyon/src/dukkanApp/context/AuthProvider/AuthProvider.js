import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from './reducers';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isAuthLoading, setIsAuthLoading] = useState(true);

    useEffect(() => {
        /* async await kullanılamaz */
        AsyncStorage.getItem("@USER").then(userSession => {
            userSession && setUser(JSON.parse(userSession));
            setIsAuthLoading(false);
        });

    }, [])


    const store = createStore(reducers, { user, isAuthLoading })
    return <Provider store={store}>{children}</Provider>
}

export default AuthProvider