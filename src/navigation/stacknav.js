import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import MAIcon from 'react-native-vector-icons/MaterialIcons';
import DetailScreen from '../pages/detail';
import MainScreen from '../pages/main/main';
import login from '../pages/login/login'

const stackNav = StackNavigator({
    Login: {
        screen: login,
        navigationOptions:({navigation}) => ({
            title: "login",
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <MAIcon name="menu" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    },
    Main: {
        screen: MainScreen,
        navigationOptions:({navigation}) => ({
            title: "Infotel - 2018",
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <MAIcon name="menu" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: (props) => ({
            title: "Detail",
        })
    }
})

export default stackNav;