import React from 'react';
import {Platform,
  SafeAreaView, StatusBar, View,ImageBackground, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import Styles from '../styles/styles';


export default class Demo extends React.Component {
 
 
  
  render() {
    return (
      <View style={Styles.containerWhite}>
         <Image  source={require("../assets/Splash.png")}
          style={{width:'100%',height:'100%'}}
          resizeMode='stretch'>
           </Image>
      </View>
    );
  }
}








      