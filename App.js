import React, { Component } from 'react';
import { DrawerNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";
import tabNav from './src/navigation/tabnav'
import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

let height = Navigator.NavigationBar.Styles.General.TotalNavHeight

const drawernav = DrawerNavigator({
    DrawerItem1: {
        screen: tabNav,
        navigationOptions: {
            //drawerLabel: "Drawer Item 1",
            drawerIcon: ({ tintColor }) => 
            <View style={{alignItems:'center', justifyContent:'center', marginTop: height}}>
                <Text>test</Text>
            </View>
        },
    },
    DrawerItem2: {
        screen: tabNav,
        navigationOptions: {
            drawerLabel: "Scan Me",
            drawerIcon: ({ tintColor }) => <Icon name="rocket" size={24} />
        },
    },
    DrawerItem3: {
        screen: tabNav,
        navigationOptions: {
            drawerLabel: "Drawer Item 3",
            drawerIcon: ({ tintColor }) => 
            <Icon name="rocket" size={24} />
        },
    },
});

export default drawernav;