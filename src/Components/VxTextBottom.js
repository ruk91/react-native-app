import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import { scale, moderateScale, verticalScale} from '../../Scaling';
export default class VxTextBottom extends Component<{}> {
    static navigationOptions = {
        header: null,
    };
  render () {
    let bottomText = this.props.BottomText
    let navigateTo = this.props.PageNavigation
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate(navigateTo)}>
        <Text style={styles.text}>{bottomText}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    backgroundColor: 'transparent',
    fontSize:moderateScale(20,0.10),
  }
})
