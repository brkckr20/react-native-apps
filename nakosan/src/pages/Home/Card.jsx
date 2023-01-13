import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import colors from '../../../assets/colors';
import fontNames from '../../../assets/fontNames';

const Card = ({ image, title }) => {
    return (
        <View>
            <View
                style={{
                    backgroundColor: "white", width: Dimensions.get("window").width / 2.5, alignItems: "center", padding: 10, margin: 10, borderRadius: 10, shadowColor: "#000",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,

                    elevation: 3,
                }}
            >
                <View>
                    <Image source={{ uri: image }} style={{ width: 120, height: 120 }} />
                </View>
                <Text style={{ color: colors.main_color, fontFamily: fontNames.firaSemibold, fontSize: 15, marginTop: 12 }}>{title}</Text>
            </View>
        </View>
    )
}
export default Card;