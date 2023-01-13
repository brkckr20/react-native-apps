import React from 'react';
import { View, Text } from 'react-native';
import colors from '../../../assets/colors';
import fontNames from '../../../assets/fontNames';
import Card from './Card';

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.main_color }}>
            <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 50, fontFamily: fontNames.firaSemibold }}>Nakosan</Text>
                <Text style={{ color: "white", fontSize: 18, fontFamily: fontNames.firaRegular }}>Yenilikçi ruhumuzla kaliteli hizmet</Text>
            </View>
            <View style={{ flex: 3, backgroundColor: colors.main_color }}>
                <View style={{ flex: 1, backgroundColor: colors.secondary_color, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 10 }}>
                    <View style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between", marginTop: -35 }}>
                        <Card image="https://cdn-icons-png.flaticon.com/512/3051/3051181.png" title="Kurumsal" />
                        <Card image="https://cdn-icons-png.flaticon.com/128/9365/9365944.png" title="Zaman Yolculuğu" />
                        <Card image="https://cdn-icons-png.flaticon.com/512/9326/9326710.png" title="Neler Yapıyoruz?" />
                        <Card image="https://cdn-icons-png.flaticon.com/512/9376/9376733.png" title="İletişim" />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Home