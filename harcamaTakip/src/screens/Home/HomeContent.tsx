import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './home.style';

export const HomeContent = () => {
  return (
    <View style={styles.homeContentWrapper}>
      <Text style={{color: 'white'}}>Hello new app 2</Text>
    </View>
  );
};
