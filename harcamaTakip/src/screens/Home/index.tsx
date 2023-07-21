import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {colors} from '../../colors';
import {styles} from './home.style';
import {HomeContent} from './HomeContent';

export const Home = () => {
  return (
    <React.Fragment>
      <StatusBar backgroundColor={colors.lightIndigo} />
      <View style={styles.topWrapper}>
        <View style={styles.topWrapperInner}>
          <View style={styles.topWrapperContent}>
            <View>
              <Text style={styles.topWrapperContentMonth}>Kasa</Text>
              <Text style={styles.topWrapperContentMonth}>1234.56 TL</Text>
            </View>
          </View>
        </View>
      </View>
      <HomeContent />
    </React.Fragment>
  );
};
