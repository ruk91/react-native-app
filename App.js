import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator, NavigationActions,TabNavigator,Icon } from 'react-navigation';
import Login from './src/pages/Login';

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
            });

    return <MainNavigator/>;
  }
}
