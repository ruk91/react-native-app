import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList, Image} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import flatListData from '../Data/flatListData'
import Swipeout from 'react-native-swipeout'

const window = Dimensions.get('window');

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        }
    }
  
    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey !== null) {
                    this.setState({ activeRowKey: null})
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key })
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Do you really want to activate this package ?',
                            [
                                {text: 'No', onPress: () => console.log('cancel Pressed'), style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                    flatListData.splice(this.props.index, 1);
                                    // Refresh FlatList
                                    this.props.parentFlatList.refreshFlatList(deletingRow)
                                }}
                            ],
                            { cancelable: true}
                        )
                    },
                    text: 'Activate', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
            <Swipeout {...swipeSettings}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    {/* <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#154360' }}> */}
                
                        <Image source={{uri: this.props.item.imageURL}} resizeMode='stretch' style={{width: responsiveWidth(88), height: 150, margin: 5}} />
    
                        {/* <View style={{ flex: 1, flexDirection:'column'}}>
                            <Text style={styles.FlatListItem}> {this.props.item.name} </Text>
                            <Text style={styles.FlatListItem}> {this.props.item.foodDescription} </Text>
                        </View> */}
  
                    </View>
                    <View style={{flex:1, height: 3, backgroundColor: 'white'}} />
                {/* </View> */}
            </Swipeout>
        )
    }
  }
  
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          deleteRowKey: null
        };
      }
  
      // refresh by changing state
      refreshFlatList = (deleteKey) => {
        this.setState(() => {
          return {
            deleteRowKey: deleteKey
          }
        })
      };
  
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.container1}>
                        <FlatList
                            data={flatListData}
                            renderItem={({item, index})=>{
                            //console.log('Item = ${JSON.stringify(item)}, index = ${index}')
                            return (
                                <FlatListItem item={item} index={index} parentFlatList={this}>

                                </FlatListItem>
                            )
                            }}>
                        </FlatList>
                    </View>
                </ScrollView>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:'rgba(255, 255, 255, 0.1)'
    },
    container1:{
        marginTop:(window.height)*.05,
        height: (window.height)*.8,
        width: (window.width)*0.95,
        backgroundColor:'rgba(255, 255, 255, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Home;