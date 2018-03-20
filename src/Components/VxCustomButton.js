import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,View
} from 'react-native'
import { scale, moderateScale, verticalScale} from '../../Scaling';
export default class VxCustomButton extends Component {
  render () {
    let btnText = this.props.BtnText
    let navigateTo = this.props.PageNavigation
    return (
        
        <View style={styles.custombtn}>
            <TouchableOpacity style={styles.top}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{btnText}</Text>
                </TouchableOpacity>
            </TouchableOpacity>
            
        </View>
        
      
    )
  }
}

const styles = StyleSheet.create({
 button: {
    width: moderateScale(100, 0.40),
    height: moderateScale(35 , 0.5),
    backgroundColor: '#ef6c00',
    marginTop: moderateScale(35 , 0.5),
    borderStyle: 'solid',
    color: '#fff',
    //alignItems: 'flex-end',
    //justifyContent: 'center',
   //marginTop: moderateScale(5, 0.25),
  },
  buttonText: {
    fontSize: moderateScale(15, 0.4),
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  top: {
    width: moderateScale(100, 0.40),
    height: moderateScale(70 , 0.5),
    backgroundColor: '#fff',
    color: '#000',
    //opacity: 0.5,
    borderRadius: 5
  },
  custombtn:{
    margin: 10,
    //width: moderateScale(100, 0.25),
  },
  
})
