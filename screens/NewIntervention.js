import React from 'react';
import {Platform,
  SafeAreaView, StatusBar, View,ImageBackground, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../styles/styles';
import Strings from '../strings/strings';


export default class NewIntervention extends React.Component {
 
  constructor(props, context) {
    super(props);
    this.state = {
    
    };
  }
  render() {
    return (
        <View style={{ flexDirection: 'column', width: '90%', height: '100%', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: '90%', height: 250, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, padding: 10, textAlign: 'center' }}>{Strings.e_export_text}</Text>
            <Image source={require("../assets/line.png")}
                    style={{ width:'100%', height:10, marginTop: 10}}
                    resizeMode="contain" /> 

            <Text style={{ fontSize: 14, marginTop: 10, padding: 10, }}>{Strings.etrs_vous_text}</Text>

            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={{ width: '50%', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.OfflineRBSheet.close()} style={{ width: '95%', height: 40, backgroundColor:Strings.color_green_code, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white',fontWeight:'bold' }}>{Strings.return_text}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '50%', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.OfflineRBSheet.close()} style={{ width: '90%', height: 40, borderColor: Strings.color_green_code, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center',borderWidth:1 }}>
                        <Text style={{ fontSize: 16, color: Strings.color_green_code,fontWeight:'bold' }}>{Strings.confirm_text}</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    </View>
    );
  }
}








      