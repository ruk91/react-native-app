import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,ScrollView,
  ImageBackground,Image,
  View,StatusBar,TouchableOpacity,TextInput,Button, NetInfo,Alert,KeyboardAvoidingView
} from 'react-native';
import { scale, moderateScale, verticalScale} from '../../Scaling';
import MAIcon from 'react-native-vector-icons/MaterialIcons';
import FUIcon from 'react-native-vector-icons/Foundation';
import FEIcon from 'react-native-vector-icons/Feather';
import { Col, Row, Grid } from "react-native-easy-grid";

import VxTextBox from '../Components/VxTextBox';
import VxButton from '../Components/VxButton';
import VxTextBottom from '../Components/VxTextBottom';
import VxIcon from '../Components/VxIcon';

export default class Home extends Component<{}> {
  static navigationOptions = {
    title: 'Home',
    headerLeft:  
      <MAIcon
        style={{paddingLeft:moderateScale(15,0.50)}}
        onPress={ () => navigation.navigate('Home')}
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
                    onPress={() => rendered_this.logout()}
                    name='settings'
                    size={moderateScale(30, 0.25)}
                    color="#fff"
                />
            </Col>
          </Grid>,
    };


        constructor(props) {
          super(props);
          this.state = {
            isConnected: null,
            typedEmail: '',
            typedPassword: ''
            // loginFromServer: []
  
          };
          this._handleReachabilityChange = this._handleReachabilityChange.bind(this);
        }
    
        _handleReachabilityChange(isConnected) {
          this.setState({
            isConnected
          });
        }


  render() {
   
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={require('../assets/bg.png')} style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>   
          <StatusBar hidden={true} />         
            <View style={styles.keyContainer}>
            <KeyboardAvoidingView behavior="position"> 
                <View style={{paddingLeft: scale(10),paddingRight: scale(10),}}>
                  <View style={styles.bodyContainer}>

                    <View style={styles.container_input}>
   
                    </View>
                  </View>
                </View>
            </KeyboardAvoidingView>

          </View>
        </ScrollView>
      </ImageBackground>
    </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
  },
  contentContainer: {
    flexGrow: 1
  },
  login_logo_container:{
    flex: .2,
    justifyContent:'flex-start',
    marginTop: scale(110),
  },
  login_logo:{
    marginTop: scale(10),
    width: moderateScale(260,0.75),
    height:moderateScale(70,0.20),
    marginLeft:scale(-5)
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop:15,
  },
  keyContainer: {
     justifyContent: 'center',
  },
  container_input:{
    alignItems: 'center',
    marginTop: scale(100),
    paddingLeft: scale(10),
    paddingRight: scale(10),
  },
  bodyContainer:{
    flex: 1,
    height: scale(520),
    borderRadius: 20,
    backgroundColor:'#fff',
    opacity: 0.8,
    marginTop: scale(50),
  },
  middleView:{
    //flex: 1,
    height: scale(120),
    borderRadius: 10,
    backgroundColor:'#fff',
    width: scale(300),
    marginTop: scale(10),
    alignItems: 'center',
    justifyContent: 'center'
  },

});
