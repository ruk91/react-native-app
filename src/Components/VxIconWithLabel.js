import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,View
} from 'react-native'
import { Grid, Col, Row, } from 'react-native-easy-grid';
import Icon from 'react-native-fa-icons';
import { scale, moderateScale, verticalScale} from '../../Scaling';
export default class VxIconWithLabel extends Component {
  render () {
    let labelText = this.props.labelText
    let navigateTo = this.props.PageNavigation
    return (
        <Grid onPress={() => this.props.navigation.navigate(navigateTo)}>
            <Col>
                <View style={{alignItems: 'center', justifyContent: 'center',marginTop: moderateScale(5, 0.25),}}>
                    <Icon name={this.props.iconName} style={{ fontSize: moderateScale(30, 0.4), color: '#FFF',}} />                        
                </View>
                <View style={{alignItems: 'center', }}>
                    <Text style={{color:'#FFF',fontSize: moderateScale(15, 0.4),textAlign:'center',justifyContent: 'center',paddingTop:10,}}>{labelText}</Text>                                        
                </View> 
            </Col>
        </Grid>
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
      text:{
        color:'#fff',
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 5,
        fontSize: moderateScale(15, 0.4),
        marginTop: moderateScale(14, 0.25),
      }
})
