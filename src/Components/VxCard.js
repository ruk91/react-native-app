import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,View
} from 'react-native'
import { Grid, Col, } from 'react-native-easy-grid';

import { scale, moderateScale, verticalScale} from '../../Scaling';
export default class VxCard extends Component {
  render () {
    let topText = this.props.topText
    let bottomText = this.props.bottomText
    return (
        <View style={{marginTop: 10, marginBottom: 10, marginLeft: this.props.marginLeft, marginRight: this.props.marginRight}}>
          <Grid>
            <Col>
              <View style={styles.top}>
                <Text style={styles.text}>{topText}</Text>
              </View>
              
              <View style={{backgroundColor: this.props.backgroundColor,borderBottomLeftRadius:5, borderBottomRightRadius:5, height: moderateScale(42 , 0.6),}}>
                <Text style={styles.text}>{bottomText}</Text>
              </View>
            </Col>
          </Grid>
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
      },
      bottom:{
        //backgroundColor: {this.props.cardColor}, 
        borderBottomLeftRadius:5, 
        borderBottomRightRadius:5,
        height: moderateScale(42 , 0.6),
      },
      // cardContainer:{
      //   marginTop: 10,
      //   marginBottom: 10,
      //   // marginLeft: this.props.marginLeft,
      //   // marginRight: this.props.marginRight,
      //   //width: moderateScale(320, 1.00),
      //   //width: scale(160,),
      //   //justifyContent: 'space-around',
        
      // },
      text:{
        color:'#fff',
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 5,
        fontSize: moderateScale(15, 0.4),
        marginTop: moderateScale(14, 0.25),
      }
})
