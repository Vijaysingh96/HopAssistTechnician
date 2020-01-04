import React from 'react';
import {StatusBar, ScrollView, View, ImageBackground, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from "../styles/styles";
import Strings from '../strings/strings'



const { width, height } = Dimensions.get("window");

export default class signUp extends React.Component {
    // onRegionChange(region) {
    //   this.setState({ region });
    // }
    constructor(props, context) {
        super(props);
        this.state = {
            setlangDefault: "", isUpdated: false,
            showUpdateDialog: false,
            isAuthorized: "1",
            userid: '',


        };
    }
    render() {
        return (
           

            <View style={styles.containerWhite}>
                <ScrollView>

                    <View style={{ alignItems: 'center' }}>
                        <Image source={require("../assets/hop-assist-logo.png")}
                            style={{ width: '100%', height: 150, marginTop: 50 }}
                            resizeMode="contain">

                        </Image>

                        <Image source={require("../assets/mobile.png")}
                            style={{ width: '100%', height: 150, marginTop:20 }}
                            resizeMode="contain">

                        </Image>

                        <TouchableOpacity onPress={() => Actions.push("Login")} style={{ alignItems: 'center', justifyContent: 'center', width: '90%', height: 50, marginTop: 40, borderRadius: 10, backgroundColor: '#01A2C4' }}>
                            <Text style={{ fontSize: 16, color: 'white' }}>{Strings.mobile_login_text}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.push("CreateReservations")} style={{ alignItems: 'center', justifyContent: 'center', width: '90%', height: 50, marginTop: 30, borderRadius: 10, backgroundColor: '#01A2C4' }}>
                            <Text style={{ fontSize: 16, color: 'white' }}>{Strings.email_login_text}</Text>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> Actions.push("Register")} style={{ flexDirection: 'row', marginTop: 40, height: 50, alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{Strings.register_free_text}</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#01A2C4' }}>{Strings.register_text}</Text>
                        </TouchableOpacity>

                        <View style={{width:'100%', marginTop: 50, }}>
                          <Image source={require("../assets/bg-3.png")}
                            style={{ width: '100%',marginBottom:-3 }}
                            resizeMode="contain"/>

                        </View>

                    </View>
                </ScrollView>
            </View>
        );
    }
}
