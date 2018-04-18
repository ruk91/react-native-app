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
            tabBarLabel:"Dining Out",
            tabBarIcon: ({ tintColor }) => <MAIcon name={"announcement"} size={30} color={tintColor} />
        }
    },
    TabItem2: {
        screen: Details,
        navigationOptions: {
            tabBarLabel:"Delivery",
            tabBarIcon: ({ tintColor }) => <MAIcon name={"receipt"} size={30} color={tintColor} />
        }
    },
    TabItem3: {
        screen: Main,
        navigationOptions: {
            tabBarLabel:"Take-Away",
            tabBarIcon: ({ tintColor }) => <MAIcon name={"business"} size={30} color={tintColor} />
        }
    },
    TabItem4: {
        screen: Details,
        navigationOptions: {
            tabBarLabel:"Drinks",
            tabBarIcon: ({ tintColor }) => <MAIcon name={"radio"} size={30} color={tintColor} />
        }
    },
    TabItem5: {
        screen: Details,
        navigationOptions: {
            tabBarLabel:"Desserts",
            tabBarIcon: ({ tintColor }) => <MAIcon name={"radio"} size={30} color={tintColor} />
        }
    },
    TabItem6: {
        screen: Details,
        navigationOptions: {
            tabBarLabel:"Bakes",
            tabBarIcon: ({ tintColor }) => <MAIcon name={"radio"} size={30} color={tintColor} />
        }
    },
    TabItem7: {
        screen: Details,
        navigationOptions: {
            tabBarLabel:"Special Packages",
            tabBarIcon: ({ tintColor }) => <MAIcon name={"radio"} size={30} color={tintColor} />
        }
    }

    ///... add more tabs here

}, {
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        activeBackgroundColor:'rgba(255, 255, 255, 0.5)',
        inactiveBackgroundColor:'rgba(255, 255, 255, 0.5)'
      },
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
});

export default tabNav;