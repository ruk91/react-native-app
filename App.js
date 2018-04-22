import React, { Component } from 'react';
import { DrawerNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground,Dimensions, Platform, DrawerView, Image } from 'react-native';
import tabNav from './src/navigation/tabnav';
//import {Navigator} from 'react-native-deprecated-custom-components';
import main from './src/pages/main/main';
import SecondScreen from './screens/SecondScreen';
import SideBar from "./src/SideBar/SideBar.js";

//let headerHeight = Navigator.NavigationBar.Styles.General.TotalNavHeight
const window = Dimensions.get('window');

const DrawerExample = DrawerNavigator(
    {
      main:{
        path:'/',
        screen:main,
      },
      SecondScreen:{
        path:'/',
        screen:SecondScreen,
      },
    },

    {
        contentComponent: props => <SideBar/>,
        drawerWidth: (window.width)*0.8,
      }
  );
  export default DrawerExample;


