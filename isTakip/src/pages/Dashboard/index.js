import React, { useState, useEffect } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import CompanyButtonCard from '../../components/CompanyButtonCard';
import DashboardCard from '../../components/DashboardCard';
import styles from './Dashboard.style';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import parsedData from '../../utils/parsedData';
import { colors } from '../../assets/colors';

const Dashboard = ({ navigation }) => {

    const [companyList, setCompanyList] = useState([]);
    const [loading, setLoading] = useState(false);
    const user = auth().currentUser.email;

    useEffect(() => {
        setLoading(true)
        database().ref("company").on("value", snapshot => {
            setCompanyList(parsedData(snapshot.val()).filter(item => item.user === user));
            setLoading(false);
        })
    }, [])

    const renderItem = ({ item }) => (
        <CompanyButtonCard item={item} onPress={() => goToCompanyDetail(item)} />
    )

    const goToCompanyDetail = (param) => {
        navigation.navigate("CompanyDetail", {
            screen: 'GönderilenBez',
            params: param,
        });
    }

    return (
        <View style={styles.container}>
            {
                loading ? (<ActivityIndicator size={40} color={colors.main_green} />) : (
                    <>
                        <FlatList
                            key={companyList.map(i => i.id)}
                            data={companyList}
                            renderItem={renderItem}
                            horizontal={false}
                            numColumns={2}
                        />
                        <View>
                            <DashboardCard count={companyList.length} />
                        </View>
                    </>
                )
            }
        </View>
    )
}

export default Dashboard;