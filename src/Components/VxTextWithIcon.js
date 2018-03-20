import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-fa-icons';
import { scale, moderateScale, verticalScale} from '../Scaling';
export default class VxTextBottom extends Component<{}> {
    static navigationOptions = {
        header: null,
    };
  render () {
    let textLabel = this.props.textLabel
    let vxIcon = this.props.vxIcon
    let navigateTo = this.props.PageNavigation
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate(navigateTo)}>
        <Text style={styles.text}>{textLabel}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate(navigateTo)}>
        <Icon style={{fontSize: moderateScale(15, 0.4), color: '#FF5100',marginLeft:10 }} >{vxIcon}</Icon>
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
