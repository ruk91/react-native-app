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

export default class Login extends Component<{}> {
      static navigationOptions = {
        header: null,
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
     
        componentDidMount() {
        //   NetInfo.isConnected.addEventListener('change', this._handleReachabilityChange);
        //   NetInfo.isConnected.fetch().done(
        //     (isConnected) => { this.setState({isConnected}); }
        //   );
        }
  
        componentWillUnmount() {
          //NetInfo.isConnected.removeEventListener('change', this._handleReachabilityChange);
        }
    
        _handleReachabilityChange(isConnected) {
          this.setState({
            isConnected
          });
        }

      email(email) {
        this.setState((previousState) => {
            return {
              typedEmail: email
            }
            console.log(typedEmail);
          })
      }
  
      password(password) {
        this.setState((previousState) => {
            return {
              typedPassword: password
            }
            console.log(typedPassword);
          })
      }
      helloWorld() {
        console.log('You tapped the click2!')
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
                  <Image source={require('../assets/hutchWhite.png')} resizeMode="stretch" style={styles.login_logo} />
                  <Text style={{fontSize:moderateScale(30,0.10),color:'#fff',marginLeft:scale(115),fontFamily: 'Signika-SemiBold'}}>Selfcare</Text>
                </View>

                <View style={styles.bodyContainer}>

                  <View style={styles.container_input}>
                    <VxTextBox placeholder='Mobile Number' onChangeText={(email) => this.email(email)}></VxTextBox>
                    <Text style={{color: '#9c9c9c'}}>{this.state.typedEmail}</Text>
                    <VxTextBox placeholder='Password' secureTextEntry={true} onChangeText={(password) => this.password(password)}></VxTextBox>
                    <Text style={{color: '#9c9c9c'}}>{this.state.typedPassword}</Text>

                    <VxButton BtnText='Login' PageNavigation='Main' navigation={this.props.navigation} method={this.helloWorld}></VxButton>
                  
                  </View>
                </View>

                  <View style={styles.bottomContainer}>
                    <Text style={{fontSize:moderateScale(18,0.10),color:'#ec6708', fontFamily: 'Signika-Regular',}}>Don't have an account?
                      <Text style={{fontSize:moderateScale(18,0.10),color:'#ec6708', fontFamily: 'Signika-Bold'}}> Sign up</Text>    
                    </Text>
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
    justifyContent:'flex-start'
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
