import React, { Component } from 'react'
import {
 StyleSheet,
 Text,
 TouchableOpacity,View,ScrollView
} from 'react-native'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { scale, moderateScale, verticalScale} from '../scaling/Scaling';


export default class VxTable extends Component {

   render () {
     // let capital_account = this.props.capital_account
     // let interest_account = this.props.interest_account
     // let total_installment = this.props.total_installment
     // let capital_outstanding = this.props.capital_outstanding
       const tableHead = ['Capital Amount','Interest Amount','Total Installment','Capital Outstanding'];
       const tableData = [
                     ["1","xxx","xxx","xxx"],
                     ["2","xxx","xxx","xxx"],
                     ["3","xxx","xxx","xxx"],
                     ["4","xxx","xxx","xxx"],
                     ["5","xxx","xxx","xxx"]
                 ];
       
        return(
         <View>
           <Table  borderStyle={{borderWidth:0.0}}>
              <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
              <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
           </Table>
         </View>
          )  
         }
}

const styles = StyleSheet.create({
 head: {height: moderateScale(40,0.25), backgroundColor: '#f1f8ff'},
 text: {marginLeft: moderateScale(5,0.6), textAlign:'center'},
 row: {height: moderateScale(30,0.25)},
});