import React, { Component } from 'react';
import { TabNavigator, TabView, TabBarBottom } from 'react-navigation'
import MAIcon from 'react-native-vector-icons/MaterialIcons';
import stackNav from './stacknav';
import Details from '../pages/detail'
import Main from '../pages/main/main'

const tabNav = TabNavigator({
    TabItem1: {
        screen: stackNav,
        navigationOptions: {
            tabBarLabel:"About",
            tabBarIcon: ({ tintColor }) => <MAIcon name={"announcement"} size={30} color={tintColor} />
        }
    },
    TabItem2: {
        screen: Details,
        navigationOptions: {
            tabBarLabel:"Plan",
            tabBarIcon: ({ tintColor }) => <MAIcon name={"receipt"} size={30} color={tintColor} />
        }
    },
    TabItem3: {
        screen: Main,
        navigationOptions: {
            tabBarLabel:"Sponser",
            tabBarIcon: ({ tintColor }) => <MAIcon name={"business"} size={30} color={tintColor} />
        }
    },
    TabItem4: {
        screen: Details,
        navigationOptions: {
            tabBarLabel:"Sectors",
            tabBarIcon: ({ tintColor }) => <MAIcon name={"radio"} size={30} color={tintColor} />
        }
    }

    ///... add more tabs here

}, {
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
});

export default tabNav;