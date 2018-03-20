import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ImageBackground,Image,
  View,StatusBar,TouchableOpacity,TextInput,Button
} from 'react-native';
import { scale, moderateScale, verticalScale} from '../../Scaling';

export default class VxTextBox extends Component<{}> {

  render() {
    //let placeHolderValue = this.props.vxPlaceholder;
    return (
        <View>
            <TextInput style={styles.inputBox} placeholder={this.props.placeholder}
                placeholderTextColor='#9c9c9c'
                underlineColorAndroid='#fff'
                selectionColor='#9c9c9c'
                onChangeText = {this.props.onChangeText}
                secureTextEntry = {this.props.secureTextEntry}
            />
        </View>
            
       
    )}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: moderateScale(320,1.0),
    height:moderateScale(40,0.60),
    fontSize:moderateScale(15, 0.5),
    marginBottom: scale(-1),
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#9c9c9c',
    paddingHorizontal: 16,
    color: '#9c9c9c',
    marginVertical: 5,
    fontFamily: 'Signika-Regular'
  }
});
