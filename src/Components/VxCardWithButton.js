import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,View
} from 'react-native'
import { scale, moderateScale, verticalScale} from '../../Scaling';
import { Grid, Col } from 'react-native-easy-grid';
export default class VxCardWithButton extends Component {
  render () {
    let topText = this.props.topText
    let bottomText = this.props.bottomText
    return (
        <View style={styles.cardContainer}>
            <View style={styles.top}>
                <Grid>
                    <Col><Text style={styles.text}>{topText}</Text></Col>
                    <Col style={styles.btnContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(navigateTo)}>
                            <Text style={styles.buttonText}>Pay Now</Text>
                        </TouchableOpacity>
                    </Col>
                </Grid> 
            </View>
            <View style={{backgroundColor: this.props.backgroundColor,borderBottomLeftRadius:5, borderBottomRightRadius:5, height: moderateScale(42 , 0.6),}}>
              <Text style={styles.text}>{bottomText}</Text>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    top:{
        backgroundColor: "rgba(255, 255, 255, 0.2)", 
        borderTopLeftRadius:5, 
        borderTopRightRadius:5,
        height: moderateScale(42 , 0.6),
        flexDirection: 'row'
      },
      bottom:{
        //backgroundColor: {this.props.cardColor}, 
        borderBottomLeftRadius:5, 
        borderBottomRightRadius:5,
        height: moderateScale(42 , 0.6),
      },
      cardContainer:{
        //marginTop: 10,
        width: moderateScale(320,1.0),
      },
      text:{
        color:'#fff',
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 5,
        fontSize: moderateScale(15, 0.4),
        marginTop: moderateScale(14, 0.25),
      },
      button: {
        width: moderateScale(120, 0.25),
        height: moderateScale(30 , 0.5),
        backgroundColor: '#E72958',
        borderRadius: 5,
        borderStyle: 'solid',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: moderateScale(10, 0.25),
        marginRight: scale(20)
      },
      buttonText: {
        fontSize: scale(11),
        fontWeight: '500',
        color: '#fff',
        //marginLeft: 2,
        backgroundColor: 'transparent',
      },
      btnContainer:{
        alignItems: "flex-end",
        justifyContent: 'center',
      }
})
