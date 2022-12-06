import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './Button.style';

const Button = ({ buttonText }) => {

    const [loading, setLoading] = React.useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={() => setLoading(!loading)}>
            {
                loading ? (<ActivityIndicator style={styles.loading} size={30} color="white" />)
                    :
                    (<Text style={styles.text}>{buttonText}</Text>)
            }

        </TouchableOpacity>
    )
}

export default Button;