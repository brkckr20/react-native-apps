import React from 'react';
import { FlatList, Text, View } from 'react-native';
import CompanyButtonCard from '../../components/CompanyButtonCard';
import DashboardCard from '../../components/DashboardCard';
import styles from './Dashboard.style';

const Dashboard = () => {

    const companies = [
        {
            id: 1,
            name: "Hambez",
            slug: "hambez"
        },
        {
            id: 2,
            name: "Simteks",
            slug: "simteks"
        },
        {
            id: 3,
            name: "Akman Tekstil",
            slug: "akman-tekstil"
        }
    ]

    const renderItem = ({ item }) => (
        <CompanyButtonCard item={item} />
    )

    return (
        <View style={styles.container}>
            <FlatList
                key={companies.map(i => i.id)}
                data={companies}
                renderItem={renderItem}
                horizontal={false}
                numColumns={2}
            />
            <View>
            </View>
            <View>
                <DashboardCard count={companies.length} />
            </View>
        </View>
    )
}

export default Dashboard;