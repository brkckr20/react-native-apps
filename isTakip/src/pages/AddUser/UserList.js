import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './AddUser.style'

const UserList = ({ userList }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.renderItemContainer}>
                <Text style={styles.renderItem}>{item.email}</Text>
                <Text style={styles.renderItem}>{item.password}</Text>
            </View>
        )
    }
    return (
        <>
            <View style={styles.userListContainer}>
                <Text style={styles.userListHeaderText}>Mevcut Kullancı Listesi - ({userList.length})</Text>
            </View>
            <View style={styles.userListTable}>
                <Text style={styles.userListHeader}>E-mail Adresi</Text>
                <Text style={styles.userListHeader}>Şifresi</Text>
            </View>

            <FlatList renderItem={renderItem} data={userList} />
        </>
    )
}

export default UserList;