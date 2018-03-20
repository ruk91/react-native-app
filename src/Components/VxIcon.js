import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,View
} from 'react-native'
import { Grid, Col, Row, } from 'react-native-easy-grid';
import Icon from 'react-native-fa-icons';
import { scale, moderateScale, verticalScale} from '../../Scaling';
export default class VxIcon extends Component {
  render () {
    let navigateTo = this.props.navigation
    let iconName = this.props.iconName
    return (
        
            <Icon 
                // onPress={() => this.props.navigation.navigate(navigateTo)}  
                name={this.props.iconName} 
                style={{ fontSize: moderateScale(20, 0.6), marginLeft:scale(10), color: '#FFF',}} 
            />                                    
       
    )
  }
}

const styles = StyleSheet.create({

})
