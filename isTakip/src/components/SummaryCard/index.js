import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './SummaryCard.style';

const SummaryCard = ({ title, iconName, sum, variant = "default", birim, balance, type }) => {
    return (
        <>
            {
                type === "balance" ? (
                    <View style={balance < 0 ? styles["red"].container : styles["green"].container}>
                        <View style={styles[variant].top}>
                            <Text style={styles[variant].topText}>
                                {title}
                            </Text>
                            <Icon name={iconName} size={50} color="white" />
                        </View>
                        <Text style={styles[variant].sum}>{balance} {birim}</Text>
                    </View>
                ) :
                    (
                        <View style={styles[variant].container}>
                            <View style={styles[variant].top}>
                                <Text style={styles[variant].topText}>
                                    {title}
                                </Text>
                                <Icon name={iconName} size={50} color="white" />
                            </View>
                            <Text style={styles[variant].sum}>{sum} {birim}</Text>
                        </View>
                    )
            }
        </>
    )
}
export default SummaryCard