import React, { Component } from 'react';
import { TouchableHighlight,Animated,TouchableWithoutFeedback,Modal,Dimensions, StyleSheet,ImageBackground,Image,View,StatusBar,Platform , TouchableOpacity, BackHandler,I18nManager} from 'react-native';
import { Container,Text,Content,Form,Item,Button,Input,CheckBox,Body,Header, Left, Right,  Title } from 'native-base';
import { Fonts, Metrics, Colors } from '../../Themes/';

// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import pic from "../../Images/bg/bg.jpg";

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
              <Image source={require('../../Images/logo/logoInfo.png')} resizeMode="stretch" style={styles.login_logo} />
            {/* </View> */}
            <View  style={styles.overlay}>
              <Text style={styles.headertext}>
              Welcome to Infotel 2018
              </Text>
              <Text style={styles.desctext}>
              Infotel has been one of the premier ICT trade shows in the world for 25 years. We’re proud to have enabled the Sri Lankan ICT industry, to grow steadily over these years. Infotel 2018, will be taking a different approach with the aim of leading the charge for digitization of the Sri Lankan economy and to enable Sri Lankan ICT companies to venture abroad and succeed.
              </Text>
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
              You will receive an email each day during infotel week from Organizing commitee offering insights into the main stories in the news and some pointers on what is expected to happen later that day.
              </Text>

              <Form  style={styles.form}>
                <Item rounded style={styles.item}>
                  <Input placeholderTextColor='#929597' placeholder='infotel2k18@gmail.com' style={styles.inputemail} />
                </Item>
                <TouchableHighlight  info style={styles.btnget} onPress={this.getStarted}>
                  <Text autoCapitalize="words" style={styles.buttongettext}>Get Started</Text>
                </TouchableHighlight>
                <TouchableHighlight  info style={styles.btnget} onPress={this.getStarted}>
                  <Text autoCapitalize="words" style={styles.buttongettext}>Skip</Text>
                </TouchableHighlight>
              </Form>
            </View>
            </View>
      </Swiper>
        </ImageBackground>
    );
  }
}
