import React from 'react';
import Router from './Router';
import AuthProvider from './context/AuthProvider';

export default () => {
    <AuthProvider>
        <Router />
    </AuthProvider>
}