import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {colors} from './colors';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar backgroundColor={colors.lightIndigo} />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.lightIndigo,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            justifyContent: 'center',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginTop: 10,
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: colors.fusionRed,
                borderRadius: 10,
                padding: 8,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: colors.white,
                }}>
                Gider
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: colors.white,
                }}>
                1234.00 TL
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 28}}>Temmuz</Text>
            </View>
            <View
              style={{
                backgroundColor: colors.reptileGreen,
                borderRadius: 10,
                padding: 8,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: colors.white,
                }}>
                Gelir
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: colors.white,
                }}>
                4543.00 TL
              </Text>
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

export default App;
