import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, Dimensions,Image } from 'react-native';
import styles from './styles';
import pic from "../../Images/bg/bg2.jpg";
import MAIcon from 'react-native-vector-icons/MaterialIcons';
import { Col, Row, Grid } from "react-native-easy-grid";
import { scale, moderateScale, verticalScale} from '../../../Scaling';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home';
import Profile from '../Profile';
import Icon from 'react-native-vector-icons/FontAwesome'

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}


class MainScreen extends Component {
    static navigationOptions = ({navigation}) => {
        const {state} = navigation;
    
        return {
          title: 'History',
          headerLeft:  
            <MAIcon
              style={{paddingLeft:(moderateScale(15,0.50))}}
              onPress={ () => navigation.navigate('Drawer')}
              name='menu'
              size={moderateScale(30, 0.25)}
              color="#fff"
            />,
          headerTintColor: '#fff',
          headerStyle:{
            titleStyle: {
              color: '#fff',
              fontFamily: 'Signika-Regular'
            },
            
          },
          headerStyle: { backgroundColor: 'transparent', position: 'absolute',top: 0,left: 0,right: 0,},
          headerTitleStyle: {alignSelf: 'center',marginRight:50, color: '#fff',marginLeft:scale(80)},
            headerIconStyle: {
              color: '#fff'},
              tintColor: '#fff', 
              headerRight:
                <Grid style={{alignItems:'center',justifyContent:'center'}}>
                  <Col>
                      <MAIcon
                          style={{paddingRight:moderateScale(15,0.50)}}
                          // onPress={() => rendered_this.logout()}
                          name='settings'
                          size={moderateScale(30, 0.25)}
                          color="#fff"
                      />
                  </Col>
                </Grid>,
          };
        };

        state= {
            //selectedTab: 'home'
          };
    
    render() {
        return (
            <ImageBackground source={pic} style={styles.screenBg}>
                <TabNavigator style={styles.container}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Dining_Out'}
                        title="Dining Out"
                        selectedTitleStyle={{color: "#3496f0"}}
                        //renderIcon={() => <MAIcon name="home" size={px2dp(22)} color="#666"/>}
                        renderIcon={() => <Image source={require('./cutlery.png')} resizeMode="stretch" style={styles.logo_horizontal} ></Image>}
                        //renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#3496f0"/>}
                        //badgeText="1"
                        onPress={() => this.setState({selectedTab: 'Dining_Out'})}>

                        <Home/>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Delivery'}
                        title="Delivery"
                        selectedTitleStyle={{color: "#3496f0"}}
                        //renderIcon={() => <Icon name="user" size={px2dp(22)} color="#666"/>}
                        renderIcon={() => <Image source={require('./food-truck.png')} resizeMode="stretch" style={styles.logo_horizontal} ></Image>}
                        onPress={() => this.setState({selectedTab: 'Delivery'})}>

                        <Profile/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Take_Away'}
                        title="Take-Away"
                        selectedTitleStyle={{color: "#3496f0"}}
                        // renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
                        renderIcon={() => <Image source={require('./take-away.png')} resizeMode="stretch" style={styles.logo_horizontal} ></Image>}
                        //renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#3496f0"/>}
                        //badgeText="1"
                        onPress={() => this.setState({selectedTab: 'Take_Away'})}>

                        <Home/>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Drinks'}
                        title="Drinks"
                        selectedTitleStyle={{color: "#3496f0"}}
                        renderIcon={() => <Image source={require('./tea.png')} resizeMode="stretch" style={styles.logo_horizontal} ></Image>}
                        onPress={() => this.setState({selectedTab: 'Drinks'})}>

                        <Profile/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Desserts'}
                        title="Desserts"
                        selectedTitleStyle={{color: "#3496f0"}}
                        renderIcon={() => <Image source={require('./ice-cream.png')} resizeMode="stretch" style={styles.logo_horizontal} ></Image>}
                        onPress={() => this.setState({selectedTab: 'Desserts'})}>

                        <Home/>
                    </TabNavigator.Item>
                </TabNavigator>
            </ImageBackground>
        )
    }
}

export default MainScreen