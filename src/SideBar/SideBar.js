import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground,Image, Dimensions } from 'react-native';
import VxLine from './VxLine';
//const routes = ["Home", "Chat", "Profile"];
const window = Dimensions.get('window');

export default class SideBar extends React.Component {
  render() {
    const { navigation } = this.props
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <View style={{height:(window.width)*0.3, borderRadius:10}}>
                    <View style={{height:(window.width)*0.3, width:(window.width)*0.8, alignItems:'center', justifyContent: 'center'}}>
                        <Image
                            style={{height:(window.width)*0.2, width:(window.width)*0.2}}
                            source={require('./man2.png')}
                            resizeMode="stretch"
                        />
                        <Text style={styles.uglyDrawerItem}>Pasindu Dineth</Text>
                    </View>
                </View>
            </View>
            <View style={{flex:.7, marginTop: (window.height)*0.25}}>

                <VxLine/>

                <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                    <View style={{flexDirection:'row',paddingLeft:(window.width)*0.03 ,paddingBottom:(window.width)*0.02 }}>
                        <View style={{ marginTop: (window.height)*0.01,paddingRight:(window.height)*0.05}}>
                            <Image source={require('./information.png')} resizeMode="stretch" style={styles.logo_horizontal} ></Image>
                            
                        </View>
                        <View style={{paddingLeft:(window.width)*0.002,marginTop: (window.height)*0.01, justifyContent:'center'}}>       
                            <Text style={styles.uglyDrawerItem}>About</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <VxLine/>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
                    <View style={{flexDirection:'row',paddingLeft:(window.width)*0.03 ,paddingBottom:(window.width)*0.02 }}>
                        <View style={{ marginTop: (window.height)*0.01,paddingRight:(window.height)*0.05}}>
                            <Image source={require('./plan.png')} resizeMode="stretch" style={styles.logo_horizontal} ></Image>
                        </View>
                        <View style={{paddingLeft:(window.width)*0.002,marginTop: (window.height)*0.01, justifyContent:'center'}}>       
                            <Text style={styles.uglyDrawerItem}>Stall Plan</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <VxLine/>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
                    <View style={{flexDirection:'row',paddingLeft:(window.width)*0.03 ,paddingBottom:(window.width)*0.02 }}>
                        <View style={{ marginTop: (window.height)*0.01,paddingRight:(window.height)*0.05}}>
                            <Image source={require('./education.png')} resizeMode="stretch" style={styles.logo_horizontal} ></Image>
                        </View>
                        <View style={{paddingLeft:(window.width)*0.002,marginTop: (window.height)*0.01, justifyContent:'center'}}>       
                            <Text style={styles.uglyDrawerItem}>Sponsors</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <VxLine/>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
                    <View style={{flexDirection:'row',paddingLeft:(window.width)*0.03 ,paddingBottom:(window.width)*0.02 }}>
                        <View style={{ marginTop: (window.height)*0.01,paddingRight:(window.height)*0.05}}>
                            <Image source={require('./diagram.png')} resizeMode="stretch" style={styles.logo_horizontal} ></Image>
                        </View>
                        <View style={{paddingLeft:(window.width)*0.002,marginTop: (window.height)*0.01, justifyContent:'center'}}>       
                            <Text style={styles.uglyDrawerItem}>Sectors</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <VxLine/>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
                    <View style={{flexDirection:'row',paddingLeft:(window.width)*0.03 ,paddingBottom:(window.width)*0.02 }}>
                        <View style={{ marginTop: (window.height)*0.01,paddingRight:(window.height)*0.05}}>
                            <Image source={require('./stall.png')} resizeMode="stretch" style={styles.logo_horizontal} ></Image>
                        </View>
                        <View style={{paddingLeft:(window.width)*0.002,marginTop: (window.height)*0.01, justifyContent:'center'}}>       
                            <Text style={styles.uglyDrawerItem}>My Visits</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <VxLine/>

            </View>
            <View style={styles.drawerFooter}>
                <TouchableOpacity>
                    <Text>Send Feedback</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Rate us on the Play Store</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      avatarContainer:{
          flex: .3,
          flexDirection: 'row',
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor:'rgba(156, 156, 156, 0.75)', 
          marginBottom:(window.width)*0.05,
          position: 'absolute',
          top: 0 ,
          left:0, 
          right:0
      },
      uglyDrawerItem: {
        fontSize: (window.width)*0.05,
        //fontWeight: 'bold',
        color: '#ef6c00',
        textAlign: 'center',
        fontFamily: 'Signika-Regular'
        },
        logo_horizontal:{   
            height: (window.width)*0.07,
            width: (window.width)*0.07,
            // height: moderateScale(32, 0.4),
            // width: moderateScale(32, 0.4),
        },
        drawerFooter:{
            position: 'absolute',
            bottom: 0 ,
            left:0, 
            right:0,
            marginLeft: (window.width)*0.05,
            marginBottom: (window.width)*0.05,
        }
  });