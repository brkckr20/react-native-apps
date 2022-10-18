import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import CategoryCard from '../components/CategoryCard/CategoryCard';
import useFetch from '../hooks/useFetch'
import { Config } from '../config/Config'

const Category = () => {

    const { data, error, loading } = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");

    const renderCategoryList = ({item}) => <CategoryCard items={item}/>

    if (loading) {
        return (
            <Text>Yükleniyor</Text>
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header_title}>Categories</Text>
            </View>
            <View style={styles.categories_container}>
                <FlatList data={data} renderItem={renderCategoryList} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header_title: {
        color: '#FFA500',
        fontSize: 20,
        fontWeight: '700',
        textAlign: "center",
        padding: 5
    },
    categories_container: {
        flex: 1,
        backgroundColor: '#FFA500',
        padding: 5
    }
})

export default Category