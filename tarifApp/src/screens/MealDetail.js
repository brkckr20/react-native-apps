import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Linking, ScrollView } from 'react-native';
import useFetch from '../hooks/useFetch';

const MealDetail = ({ route }) => {
    const { idMeal } = route.params
    const { data, loading } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)

    loading ? console.log("yükleniyor") : console.log("Yüklendi")

    if (loading) {
        return <Text>
            Yükleniyor
        </Text>
    }


    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: data.meals[0].strMealThumb }} />
            <View>
                <Text style={styles.title}>{data.meals[0].strMeal}</Text>
                <Text style={styles.sub_title}>{data.meals[0].strArea}</Text>
                <Text style={styles.desc}>{data.meals[0].strInstructions}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(data.meals[0].strYoutube)}>
                <Text style={styles.button_title}>Watch on YouTube</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {},
    image: {
        width: Dimensions.get("window").width,
        height: 250,
        resizeMode: "cover"
    },
    title: {
        fontSize: 25,
        color: "#A52A2A",
        fontWeight: 'bold',
        paddingLeft: 5
    },
    sub_title: {
        color: "#A52A2A",
        paddingLeft: 5,
        borderBottomWidth: 1,
        borderColor: "rgba(0,0,0,.2)",
        paddingBottom: 5
    },
    desc: {
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'justify',
        color : "black"
    },
    button: {
        backgroundColor: "#FF0000",
        padding: 10,
        margin: 5,
        borderRadius: 10,
    },
    button_title: {
        color: "white",
        textAlign: "center",
        fontWeight: "700"
    }
})

export default MealDetail