import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator, NavigationActions,TabNavigator,Icon } from 'react-navigation';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Otp from './src/pages/Otp';
import Register from './src/pages/Register';
import ResetPassword from './src/pages/ResetPassword';

import {
  Platform,
  StyleSheet,
  Text,
  ImageBackground,Image,TextInput,
  View,StatusBar,TouchableOpacity
} from 'react-native'


export default class App extends Component<{}> {
  static navigationOptions = {
    //header: null,
    };
    render() {
      Text.defaultProps.allowFontScaling=false
      const MainNavigator = StackNavigator({
            Login: { screen: Login },
            Home: { screen: Home},
            Otp: {screen: Otp},
            Register: {screen: Register},
            ResetPassword: {screen: ResetPassword},
            });

    return <MainNavigator/>;
  }
}
