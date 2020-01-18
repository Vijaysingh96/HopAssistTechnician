import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView, Animated, Easing } from "react-native";
import * as Animatable from "react-native-animatable";

const zoomOut = {
    0: {
      opacity: 1,
      scale: 1,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    },
    1: {
      opacity: 0,
      scale: 0,
    },
  };

export default class index extends Component {

  render() {
    return (
      <SafeAreaView style={{flex:1,marginTop:20}}>
       
        <View style={{ alignItems: "center" }}>
          <Animatable.View style={{width:100,height:100,backgroundColor:'red'}} animation="bounceInLeft" iterationCount={3} direction="reverse">
            <Text style={{color:'white'}}>slideInDown Animation</Text>
          </Animatable.View>
        </View>

      </SafeAreaView>
    );
  }
}








      