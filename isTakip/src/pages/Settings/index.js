import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../assets/colors';
import styles from './Settings.style';
import auth from '@react-native-firebase/auth';

const Settings = ({ navigation }) => {
    const settingsValue = [
        {
            id: 1,
            name: "Hesap Ayarları",
            iconName: "account-cog-outline"
        },
        {
            id: 2,
            name: "Firma Ayarları",
            iconName: "domain"
        }
    ]

    const goToSettingsDetail = (settingsName) => {
        switch (settingsName) {
            case "Hesap Ayarları":
                navigation.navigate("SettingsAccount");
            case "Firma Ayarları":
                navigation.navigate("SettingsCompany");
            default:
                break;
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.settingsContainer} onPress={() => goToSettingsDetail(item.name)}>
            <Icon name={item.iconName} size={50} color={colors.main_green} />
            <Text style={styles.settingsName}>{item.name}</Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <FlatList
                    key={settingsValue.map(i => i.id)}
                    data={settingsValue}
                    renderItem={renderItem}
                    horizontal={false}
                    numColumns={2}
                />
            </View>
        </View>
    )
}

export default Settings