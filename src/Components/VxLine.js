import React, { Component } from 'react'
import {
    View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import { scale, moderateScale, verticalScale} from '../../Scaling';
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
        borderBottomColor: '#FFF',
        //width: moderateScale(350, 1.0),
        marginTop: 10,
        opacity: 0.5,
    }
})
