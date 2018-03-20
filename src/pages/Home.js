import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,ScrollView,
  ImageBackground,Image,
  View,StatusBar,TouchableOpacity,TextInput,Button, NetInfo,Alert,KeyboardAvoidingView
} from 'react-native';
import { scale, moderateScale, verticalScale} from '../../Scaling';

import VxTextBox from '../Components/VxTextBox';
import VxButton from '../Components/VxButton';
import VxTextBottom from '../Components/VxTextBottom';
import VxIcon from '../Components/VxIcon';

export default class Home extends Component<{}> {
      static navigationOptions = {
        title: 'Home Page',
        headerLeft: <VxIcon 
                      //onPress={() => navMenu()}
                      iconName={'navicon'} 
                      style={{ 
                          fontSize:moderateScale(20, 0.5), 
                          color: '#FFF', 
                          marginLeft:moderateScale(10, 0.5)}}
                      PageNavigation='Profile' 
                      //navigation={this.props.navigation} 
                    />,

        headerTintColor: '#fff',
        headerStyle:{
          titleStyle: {
            color: '#fff'
          },
          
        },
        headerStyle: { backgroundColor: 'transparent', position: 'absolute',top: 0,left: 0,right: 0,},
        headerTitleStyle: {alignSelf: 'center',marginRight:50, color: '#fff',marginLeft:scale(80)},
          headerIconStyle: {
            color: '#fff'},
            tintColor: '#fff', 
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
      <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>   
          <StatusBar hidden={true} />         
            <View style={styles.keyContainer}>
              <KeyboardAvoidingView behavior="position"> 
          
                <View style={styles.login_logo_container}>
                  {/* <Image source={require('../assets/hutchWhite.png')} resizeMode="stretch" style={styles.login_logo} /> */}
                  {/* <Text style={{fontSize:moderateScale(30,0.10),color:'#fff',marginLeft:scale(115),fontFamily: 'Signika-SemiBold'}}>Kema Kade</Text> */}
                </View>

                <View style={styles.bodyContainer}>

                  <View style={styles.container_input}>
                   
                  </View>
                </View>

                  {/* <View style={styles.bottomContainer}>
                    <Text style={{fontSize:moderateScale(18,0.10),color:'#ec6708', fontFamily: 'Signika-Regular',}}>Don't have an account?
                      <Text style={{fontSize:moderateScale(18,0.10),color:'#ec6708', fontFamily: 'Signika-Bold'}}> Sign up</Text>    
                    </Text>
                  </View> */}

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
    flex: 0.8,
    marginTop: scale(30),
    justifyContent: 'center',
    alignItems: 'center'
  }
});
