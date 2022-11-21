import React from 'react';
import { View, Text } from 'react-native';
import Input from '../../components/Input';
import styles from './Register.style';
import { Button } from '../../components/Button'

const Register = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.banner}>
                codetalks
            </Text>
            <View style={styles.input_container}>
                <Input placeholder="e-postanızı giriniz..." />
                <Input placeholder="şifrenizi giriniz..." isSecure={true} />
                <Input placeholder="şifrenizi tekrar giriniz..." isSecure={true} />
                <View>
                    <Button buttonText="Kayıt ol" variant="primary" />
                    <Button buttonText="Geri" variant="secondary" />
                </View>
            </View>
        </View>
    )
}

export default Register;