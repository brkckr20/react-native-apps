import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import colors from '../assets/colors';
import fontNames from '../assets/fontNames';

const App = () => {
    return (
        <>
            <StatusBar backgroundColor={colors.main_color} />
            <View style={{ flex: 1, backgroundColor: colors.main_color }}>
                <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: "center" }}>
                    <Text style={{ color: "white", fontSize: 50, fontFamily: fontNames.firaSemibold }}>Nakosan</Text>
                    <Text style={{ color: "white", fontSize: 18, fontFamily: fontNames.firaRegular }}>Yenilikçi ruhumuzla kaliteli hizmet</Text>
                </View>
                <View style={{ flex: 3, backgroundColor: colors.main_color }}>
                    <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 10 }}>
                        <Text style={{ color: colors.main_color }}>Anasayfa Tasarımı gelicek</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default App;