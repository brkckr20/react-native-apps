import { useState, useEffect } from 'react';
import { SafeAreaView, Text, Button, View } from 'react-native';

function CleanUp() {

    const [flag, setFlag] = useState(true);

    function updateFlag() {
        setFlag(!flag);
    }

    return (
        <SafeAreaView>
            <Text>CleanUp</Text>
            <Button title='Up!' onPress={updateFlag} />
            {
                flag && <Hello />
            }
        </SafeAreaView>
    )
}

export default CleanUp;


function Hello() {

    useEffect(() => {
        console.log("Hello mounted");

        return () => { //componentWillUnMount olayı
            console.log("Hello component unmounted!");
        }
    }, [])

    return (
        <View style={{ backgroundColor: "pink", padding: 10 }}>
            <Text>I'am Hello Component</Text>
        </View>
    )
}