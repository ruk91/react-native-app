import React, { Component } from 'react';
import { TouchableHighlight,Animated,TouchableWithoutFeedback,Modal,Dimensions, StyleSheet,ImageBackground,Image,View,StatusBar,Platform , TouchableOpacity, BackHandler,I18nManager} from 'react-native';
import { Container,Text,Content,Form,Item,Button,Input,CheckBox,Body,Header, Left, Right,  Title } from 'native-base';
import { Fonts, Metrics, Colors } from '../../Themes/';

// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import pic from "../../Images/bg/bg2.jpg";

export default class login extends Component{
  static navigationOptions = {
    header: null,
    tabBarVisible: false,
    };
  
    constructor(props) {
      super(props);
      this.state = {};
    }

  getStarted =()=> {
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <ImageBackground source={pic}  style={styles.screenBg}>
        <StatusBar hidden={true} />
        <Swiper showsButtons={false} ref='swiper' scrollEnabled={ false } showsPagination={false} >

        <View style={styles.slide1}>
            {/* <View style={styles.logoContainer}> */}
              {/* <Image source={require('../../Images/logo/logoInfo.png')} resizeMode="stretch" style={styles.login_logo} /> */}
            {/* </View> */}
            <View  style={styles.overlay}>
              <Text style={styles.headertext}>
                Sleep|Eat|Travel
              </Text>
              {/* <Text style={styles.desctext}>
              Infotel has been one of the premier ICT trade shows in the world for 25 years. We’re proud to have enabled the Sri Lankan ICT industry, to grow steadily over these years. Infotel 2018, will be taking a different approach with the aim of leading the charge for digitization of the Sri Lankan economy and to enable Sri Lankan ICT companies to venture abroad and succeed.
              </Text> */}
              <View style={styles.buttonContainer}>
                <Form  style={styles.form}>
                  <TouchableHighlight  info style={styles.btnget} onPress={() => this.refs.swiper.scrollBy(1)}>
                    <Text autoCapitalize="words" style={styles.buttongettext}>Continue</Text>
                  </TouchableHighlight>
                </Form>
              </View>
            </View>
        </View>

          <View style={styles.slide2}>
          
          <View  style={styles.overlay}>

            <Text style={styles.headertext}>
              Register with your Email
              </Text>
              <Text style={styles.desctext}>
              You will receive email with promotion information of Sleatra for the email you mention below. 
              </Text>

              <Form  style={styles.form}>
                <Item rounded style={styles.item}>
                  <Input placeholderTextColor='#fff' placeholder='promotions@sleatra.com' style={styles.inputemail} />
                </Item>
                <TouchableHighlight  info style={styles.btnget} onPress={() => this.refs.swiper.scrollBy(1)}>
                  <Text autoCapitalize="words" style={styles.buttongettext}>Get Started</Text>
                </TouchableHighlight>
                <TouchableHighlight  info style={styles.btnget} onPress={this.getStarted}>
                  <Text autoCapitalize="words" style={styles.buttongettext}>Skip</Text>
                </TouchableHighlight>
              </Form>
            </View>
          </View>

          <View style={styles.slide3}>
          
          <View  style={styles.overlay}>

            <Text style={styles.headertext}>
              Register with your Email
              </Text>
              <Text style={styles.desctext}>
              You will receive email with promotion information of Sleatra for the email you mention below. 
              </Text>

              <Form  style={styles.form}>
                <Item rounded style={styles.item}>
                  <Input placeholderTextColor='#fff' placeholder='Enter your email here' style={styles.inputemail} />
                </Item>
                <Item rounded style={styles.item}>
                  <Input placeholderTextColor='#fff' placeholder='Enter a password' style={styles.inputemail} />
                </Item>
                <Item rounded style={styles.item}>
                  <Input placeholderTextColor='#fff' placeholder='re-enter the password' style={styles.inputemail} />
                </Item>
                <TouchableHighlight  info style={styles.btnget} onPress={this.getStarted}>
                  <Text autoCapitalize="words" style={styles.buttongettext}>Submit</Text>
                </TouchableHighlight>
              </Form>
            </View>
          </View>
        </Swiper>
      </ImageBackground>
    );
  }
}
