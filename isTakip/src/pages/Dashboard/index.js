import React from 'react';
import { View, Text } from 'react-native';

import AppHeader from '../../components/AppHeader';
import DashboardCard from '../../components/DashboardCard';

const Dashboard = () => {
    return (
        <View>
            <AppHeader text="Yönetim Paneli" />
            <View>
                <DashboardCard />
            </View>
        </View>
    )
}

export default Dashboard;