import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Alert } from 'react-native';
import Input from '../../components/Input';
import styles from './Register.style';
import { Button } from '../../components/Button'
import { colors } from '../../colors';

import auth from '@react-native-firebase/auth';

const Register = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");

    async function createUser(values) {
        if (password !== repassword) {
            Alert.alert("Uyarı", "Şifreler eşleşmiyor. Kontrol ediniz!", [{}, { text: "Tamam" }]);
            return;
        }
        await auth().createUserWithEmailAndPassword(email, password);
        navigation.navigate("LoginPage");

    }

    const handleLoginPage = () => {
        navigation.navigate("LoginPage");
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.main_bg_orange} />
            <Text style={styles.banner}>
                codetalks
            </Text>
            <View style={styles.input_container}>
                <Input placeholder="e-postanızı giriniz..." value={email} onChangeText={setEmail} />
                <Input placeholder="şifrenizi giriniz..." isSecure={true} value={password} onChangeText={setPassword} />
                <Input placeholder="şifrenizi tekrar giriniz..." isSecure={true} value={repassword} onChangeText={setRePassword} />
                <View>
                    <Button buttonText="Kayıt ol" variant="primary" onPress={createUser} />
                    <Button buttonText="Geri" variant="secondary" onPress={handleLoginPage} />
                </View>
            </View>
        </View>
    )
}

export default Register;