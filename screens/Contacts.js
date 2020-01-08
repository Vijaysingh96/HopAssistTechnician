import React from 'react';
import {
    Platform, TextInput,
    SafeAreaView, StatusBar, ScrollView, View, ImageBackground, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../styles/styles';
import Strings from '../strings/strings';



export default class Contacts extends React.Component {

    constructor(props, context) {
        super(props);
        this.state = {
            selected: "[€]29",
           callPoloceText:'+33 998855',
           sentmassageText:'Hopassist@gmail.com'
        };
    }

    onValueChange(value, label) {
        this.setState({
            selected: value
        });
        
    }

    callNumber = () => {

        Linking.openURL(this.state.callPoloceText);
        let phoneNumber = '';
    
    
        if (Platform.OS === 'android') {
          phoneNumber = 'tel:${' + this.state.callPoloceText + '}';
        }
        else {
          phoneNumber = 'telprompt:${' + this.state.callPoloceText + '}';
        }
    
        Linking.openURL(phoneNumber);
      }
      sendMail = () => {
    
        Linking.openURL('mailto:'+this.state.sentmassageText);
      }

      facebook =() => {
        Linking.openURL('http://facebook.com/');
      }
      instagram = ()=>{
        Linking.openURL('http://instagram.com/');   
      }
      twitter =()=>{
        Linking.openURL('http://twitter.com/');   
      }
      google =() =>{
        Linking.openURL('http://google.com/');   
      }

    
    render() {
        return (
            <View style={Styles.containerWhite}>
                <ImageBackground source={require("../assets/simble.png")}
                    style={{ width: '100%', height: 78, }}>
                    <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => Actions.pop()} style={{ width: '15%', height: 50, justifyContent: 'center', alignItems: 'center', }}>
                            <Image source={require("../assets/back.png")}
                                style={{ width: 25, height: 25, }}
                                resizeMode="contain" />
                        </TouchableOpacity>
                        <View style={{ width: '80%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{Strings.contacts_text}</Text>

                        </View>

                    </View>
                </ImageBackground>
                <ScrollView style={{ marginTop: -20 }}>
                    <View style={{ margin: 10 }}>
                        <Text style={{ padding: 10,fontSize:14 }}>
                            Hop-Assist vous permet de resoudre rapidement, efficacement et
    pour un cout raisonnable tous les problemes d informatique que
    vous rencontrez chez vous ou dans votre entreprise.Hop assist est
    l application permettant de connecter en temps en capacite
    d intervenir rapidement sur la plupart des type de pannes ou
    de blocages.
                        </Text>

                        <View style={{flexDirection:'row',marginTop:30,marginLeft:10}}>
                            <Image source={require('../assets/location.png')}
                            style={{width:20,height:20}}>
                            </Image>
                            <Text style={{fontSize:14,paddingLeft:10,fontWeight:'bold'}}>Avenue de wagram 75017 paris France</Text>
                        </View>

                        <TouchableOpacity onPress={() => this.callNumber()} style={{flexDirection:'row',marginTop:30,marginLeft:10}}>
                            <Image source={require('../assets/Artboard5.png')}
                            style={{width:20,height:20}}>
                            </Image>
                            <Text style={{fontSize:14,paddingLeft:10,fontWeight:'bold'}}>+33 8899445</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.sendMail()} style={{flexDirection:'row',marginTop:30,marginLeft:10}}>
                            <Image source={require('../assets/envelope.png')}
                            style={{width:20,height:20}}>
                            </Image>
                            <Text style={{fontSize:14,paddingLeft:10,fontWeight:'bold'}}>Hopassist@gmail.com</Text>
                        </TouchableOpacity>


                        <View style={{flexDirection:'row',justifyContent:'center',width:'100%',marginTop:40}}>

                            <TouchableOpacity onPress={() => this.facebook()} style={{width:50,height:50,alignItems:'center',justifyContent:'center',margin:10}}>
                            <Image source={require('../assets/facebook.png')}
                            style={{width:40,height:40}}>
                            </Image>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.google()} style={{width:50,height:50,alignItems:'center',justifyContent:'center',margin:10}}>
                            <Image source={require('../assets/search(1).png')}
                            style={{width:40,height:40}}>
                            </Image>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.instagram()} style={{width:50,height:50,alignItems:'center',justifyContent:'center',margin:10}}>
                            <Image source={require('../assets/instagram.png')}
                            style={{width:40,height:40}}>
                            </Image>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.twitter()} style={{width:50,height:50,alignItems:'center',justifyContent:'center',margin:10}}>
                            <Image source={require('../assets/twitter.png')}
                            style={{width:40,height:40}}>
                            </Image>

                            </TouchableOpacity>
                            
                        </View>

                    </View>
                </ScrollView>
            </View>
        );
    }
}








