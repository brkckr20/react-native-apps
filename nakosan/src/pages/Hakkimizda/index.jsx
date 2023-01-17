import React from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import colors from '../../../assets/colors';
import fontNames from '../../../assets/fontNames';

const Hakkimizda = () => {
    return (
        <ScrollView style={{ padding: 10, flex: 1, backgroundColor: "#FBF3E6" }}>
            <View style={{ position: "relative" }}>
                <Image
                    source={{ uri: 'https://www.nakosan.com.tr/wp-content/uploads/elementor/thumbs/hikayemiz-pzrtj81s2hs3qbjzonvdz89pf8xac4y7iv7smdw5xw.jpg' }}
                    style={{ width: 320, height: 395, borderRadius: 16 }}
                />
                <View style={{ borderRadius: 16, backgroundColor: colors.main_color, width: Dimensions.get("window").width / 2, padding: 20, position: "absolute", right: 0, bottom: 0 }}>
                    <Text style={{ fontSize: 24, fontFamily: fontNames.firaSemibold, color: "white" }}>
                        Denizli'nin Tekstil Tarihi 7 Bin Yıl Öncesine Dayanıyor
                    </Text>
                </View>
            </View>
            <View style>
                <Text style={{ fontSize: 26, color: "#111915", marginTop: 10, marginBottom: 10, fontFamily: fontNames.firaRegular }}>Hikayemiz</Text>
                <Text style={{ fontSize: 16, color: "#7e7972", marginBottom: 10 }}>
                    Hikayemiz 1986’da ufak bir atölyede tek nakış makinasıyla başladı ve sağlam adımlarla ilerleyip zaman içerisinde nakış parkurunu kurdu ve bünyesine konfeksiyonu, havlu bez dokuma tezgahlarını, dijital baskıyı trikoyu da dahil etti.
                </Text>
                <Text style={{ fontSize: 16, color: "#7e7972", marginBottom: 10 }}>
                    Bu zengin anlatıyı iki kavramla özetlemek gerekirse, yenilik ve kalite diyebiliriz. Son teknoloji makinalara yaptığı yatırımlarla ürün yelpazesini arttırırken, kalite standartlarını da yüksek tutuyor.
                </Text>
                <Text style={{ fontSize: 16, color: "#7e7972", marginBottom: 20 }}>
                    Nakosan, sürekli büyürken zanaatkarlık ruhunu korudu ve bu ruhla başarı çizgisini arttırarak uluslararası ticarette aldığı etkin rolle Türkiye’nin heyecan veren girişimci şirketler arasında yerini aldı.
                </Text>
            </View>
        </ScrollView>
    )
}

export default Hakkimizda