import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../assets/colors';
import AppHeader from '../../components/AppHeader';
import styles from './Settings.style';

const Settings = () => {
    const settingsValue = [
        {
            id: 1,
            name: "Profil Ayarları",
            iconName: "account-cog-outline"
        },
        {
            id: 2,
            name: "Firma Ayarları",
            iconName: "domain"
        }
    ]

    const renderItem = ({ item }) => (
        <View style={styles.settingsContainer}>
            <Icon name={item.iconName} size={50} color={colors.main_green} />
            <Text style={styles.settingsName}>{item.name}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <AppHeader text="Ayarlar" iconSize={25} iconColor={colors.gray300} />
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