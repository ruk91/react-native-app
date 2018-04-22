import React, { Component } from 'react'
import {
    View,
  StyleSheet,
  Text,
  TouchableOpacity, Dimensions
} from 'react-native'
//import { scale, moderateScale, verticalScale} from '../../Scaling';

const window = Dimensions.get('window');

export default class VxTextBox extends Component {
  render () {
    let btnText = this.props.BtnText
    let navigateTo = this.props.PageNavigation
    return (
        <View
        style={styles.lineStyle}
          />
    )
  }
}

const styles = StyleSheet.create({
    lineStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#ef6c00',
        //width: moderateScale(350, 1.0),
        //marginTop: 10,
        marginLeft: (window.width)*0.03,
        marginRight: (window.width)*0.03,
        opacity: 0.4,
    }
})
