import React from 'react';
import { View, Text, StatusBar, Image, Dimensions } from 'react-native';
import colors from '../../../assets/colors';
import fontNames from '../../../assets/fontNames';
import Card from './Card';

import styles from './Home.style'

const Home = ({ navigation }) => {

    const handleNavigate = () => {
        navigation.navigate('Kurumsal')
    }

    return (
        <>
            <StatusBar backgroundColor={colors.main_color} />
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.topTitle}>Nakosan</Text>
                    <Text style={styles.topSlogan}>Yenilikçi ruhumuzla kaliteli hizmet</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.contentWrapper}>
                        <View style={styles.contentCardWrapper}>
                            <Card image="https://cdn-icons-png.flaticon.com/512/3051/3051181.png" title="Kurumsal" onPress={handleNavigate} />
                            <Card image="https://cdn-icons-png.flaticon.com/128/9365/9365944.png" title="Zaman Yolculuğu" />
                            <Card image="https://cdn-icons-png.flaticon.com/512/9326/9326710.png" title="Neler Yapıyoruz?" />
                            <Card image="https://cdn-icons-png.flaticon.com/512/9376/9376733.png" title="İletişim" />
                        </View>
                        <View style={styles.contentBottom}>
                            <Image style={styles.contentBottomImage} source={{ uri: 'https://www.nakosan.com.tr/wp-content/uploads/2022/11/Nakosan-Logo.png' }} />
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Home