import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import pic from "../../Images/bg/bg2.jpg";

class MainScreen extends Component {
    render() {
        return (
            <ImageBackground source={pic} style={styles.screenBg}>
            </ImageBackground>
        )
    }
}

export default MainScreen