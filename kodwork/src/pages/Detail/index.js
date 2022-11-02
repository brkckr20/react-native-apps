import React from 'react';
import { View, Text } from 'react-native';
import useFetch from '../../hooks/useFetch'
import { config } from '../../config';
import Loading from '../../components/Loading';
import styles from './Detail.style'
const Detail = ({ route }) => {
    const { id } = route.params;
    const { data, loading, error } = useFetch(`${config.JOB}/${id}`);
    console.log(data)
    return (
        <View>
            {
                loading ? (
                    <View style={{ marginTop: 20 }}><Loading /></View>
                ) : (
                    <View style={styles.top_container}>
                        <Text style={styles.header_title}>{data.categories[0].name}</Text>
                        <Text style={styles.location_title}>Locations : <Text style={styles.location_content}>{data.locations[0].name}</Text></Text>
                        <Text style={styles.location_title}>Job Level : <Text style={styles.location_content}>{data.levels[0].name}</Text></Text>
                        <Text style={styles.job_title_head}>Job Detail</Text>
                    </View>
                )
            }
        </View>
    )
}

export default Detail