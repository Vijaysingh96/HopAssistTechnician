import React from 'react';
import { StatusBar, ScrollView, TextInput, View, ImageBackground, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from "../styles/styles";
import Strings from '../strings/strings'


const { width, height } = Dimensions.get("window");

export default class login extends React.Component {
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

                        <View style={{ margin: 20, width: '90%' }}>

                            <View style={{ width: '100%', height: 45, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.email_address_text}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>
                            <View style={{ width: '100%', height: 45, marginTop: 20, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.password_text}
                                    secureTextEntry={true}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>

                            <TouchableOpacity onPress={() => Actions.push("ExpertsList")}  style={{ width: '100%', flexDirection: 'column', marginTop: 10 }}>

                                <Text style={{color: '#01A2C4', textAlign: 'right', marginRight:0, marginTop: 10, fontSize: 14, fontWeight: 'bold' }}>
                                    {Strings.forgotpassword_text}
                                </Text>
                            </TouchableOpacity>


                        </View>
                        
                        <TouchableOpacity onPress={()=> Actions.push("Location")} style={{ alignItems: 'center', justifyContent: 'center', width: '90%', height: 50, marginTop: 30, borderRadius: 10, backgroundColor: '#01A2C4' }}>
                            <Text style={{ fontSize: 16, color: 'white' }}>{Strings.email_login_text}</Text>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> Actions.push("Register")} style={{ flexDirection: 'row', marginTop: 40, height: 50, alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{Strings.register_free_text}</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#01A2C4' }}>{Strings.register_text}</Text>
                        </TouchableOpacity>

                        <View style={{ width: '100%', marginTop: 50, }}>
                            <Image source={require("../assets/bg-3.png")}
                                style={{ width: '100%', marginBottom: -3 }}
                                resizeMode="contain" />

                        </View>

                    </View>
                </ScrollView>
            </View>
        );
    }
}
