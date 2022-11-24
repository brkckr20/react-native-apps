import React, { useState } from 'react';
import { View, Text, StatusBar, Alert } from 'react-native';
import Input from '../../components/Input';
import styles from './Login.style';
import { Button } from '../../components/Button'
import { colors } from '../../colors';
import auth from '@react-native-firebase/auth';
import errorMessageParser from '../../utils/errorMessageParser';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleRegisterPage = () => {
        navigation.navigate("RegisterPage");
    }

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Uyarı", "Kullanıcı adı ve şifre boş geçilemez!", [{}, { text: "Tamam" }]);
            return;
        }
        try {
            await auth().signInWithEmailAndPassword(email, password);
            navigation.navigate("RoomsPage")
        } catch (error) {
            Alert.alert("Uyarı", errorMessageParser(error.code), [{}, { text: "tamam" }])
            // console.log(error.code)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.main_bg_orange} />
            <Text style={styles.banner}>
                codetalks
            </Text>
            <View style={styles.input_container}>
                <Input placeholder="e-postanızı giriniz..." value={email} onChangeText={setEmail} />
                <Input placeholder="şifrenizi giriniz..." value={password} onChangeText={setPassword} isSecure={true} />
                <View>
                    <Button buttonText="Giriş Yap" variant="primary" onPress={handleLogin} />
                    <Button buttonText="Kayıt Ol" variant="secondary" onPress={handleRegisterPage} />
                </View>
            </View>
        </View>
    )
}

export default Login;