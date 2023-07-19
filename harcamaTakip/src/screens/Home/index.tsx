import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {colors} from '../../colors';
import {styles} from './home.style';

export const Home = () => {
  return (
    <React.Fragment>
      <StatusBar backgroundColor={colors.lightIndigo} />
      <View style={styles.topWrapper}>
        <View style={styles.topWrapperInner}>
          <View style={styles.topWrapperContent}>
            <View style={styles.topWrapperContentGider}>
              <Text style={styles.topWrapperContentTitle}>Gider</Text>
              <Text style={styles.topWrapperContentMoney}>1234.00 ₺</Text>
            </View>
            <View>
              <Text style={styles.topWrapperContentMonth}>Temmuz</Text>
            </View>
            <View style={styles.topWrapperContentGelir}>
              <Text style={styles.topWrapperContentTitle}>Gelir</Text>
              <Text style={styles.topWrapperContentMoney}>4543.00 ₺</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 5, backgroundColor: 'white'}}>
        <Text style={{color: 'black'}}>Hello new app</Text>
      </View>
    </React.Fragment>
  );
};
