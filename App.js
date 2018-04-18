import React, { Component } from 'react';
import { DrawerNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";
import tabNav from './src/navigation/tabnav'

const drawernav = DrawerNavigator({
    DrawerItem1: {
        screen: tabNav,
        navigationOptions: {
            drawerLabel: "Drawer Item 1",
            drawerIcon: ({ tintColor }) => <Icon name="rocket" size={24} />
        },
    },
    DrawerItem2: {
        screen: tabNav,
        navigationOptions: {
            drawerLabel: "Scan Me",
            drawerIcon: ({ tintColor }) => <Icon name="rocket" size={24} />
        },
    }
});

export default drawernav;