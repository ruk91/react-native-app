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
    let textLabel = this.props.textLabel
    let navigateTo = this.props.PageNavigation
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate(navigateTo)}>
        <Text style={styles.text}>{textLabel}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 16,
    backgroundColor: 'transparent',
    fontSize:moderateScale(20,0.10),
  }
})
