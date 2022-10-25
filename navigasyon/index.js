/**
 * @format
 */
// import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native';
import Wrapper from './src/dukkanApp/Wrapper';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Wrapper);
