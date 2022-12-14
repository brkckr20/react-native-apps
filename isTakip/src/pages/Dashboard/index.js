import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import CompanyButtonCard from '../../components/CompanyButtonCard';
import DashboardCard from '../../components/DashboardCard';
import styles from './Dashboard.style';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import parsedData from '../../utils/parsedData';

const Dashboard = ({ navigation }) => {

    const [companyList, setCompanyList] = useState([]);
    const user = auth().currentUser.email;
    useEffect(() => {
        database().ref("company").on("value", snapshot => {
            setCompanyList(parsedData(snapshot.val()).filter(item => item.user === user));
        })
    }, [])

    const renderItem = ({ item }) => (
        <CompanyButtonCard item={item} onPress={() => goToCompanyDetail(item)} />
    )

    const goToCompanyDetail = (params) => {
        navigation.navigate("CompanyDetail", {
            screen: 'GönderilenBez',
            params: params
        });
    }

    return (
        <View style={styles.container}>
            <FlatList
                key={companyList.map(i => i.id)}
                data={companyList}
                renderItem={renderItem}
                horizontal={false}
                numColumns={2}
            />
            <View>
            </View>
            <View>
                <DashboardCard count={companyList.length} />
            </View>
        </View>
    )
}

export default Dashboard;