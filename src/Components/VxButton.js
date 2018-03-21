import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import { scale, moderateScale, verticalScale} from '../../Scaling';
export default class VxButton extends Component {
  render () {
    let btnText = this.props.BtnText
    let navigateTo = this.props.PageNavigation
    return (
      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(navigateTo)}>
        <Text style={styles.buttonText}>{btnText}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
 button: {
    width: moderateScale(310, 0.75),
    height: moderateScale(35 , 0.5),
    backgroundColor: '#DE3E46',
    borderRadius: 10,
    borderStyle: 'solid',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(5, 0.25),
  },
  buttonText: {
    fontFamily: 'Signika-Regular',
    fontSize: moderateScale(15, 0.4),
    //fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'transparent',
  }
})
