import React, { Component } from "react";
import { Image, Alert, AsyncStorage, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import {
    Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Left,
    Right,
    Badge,
    View,
    Button

} from "native-base";
import { Actions } from "react-native-router-flux";
import strings from '../strings/strings'



class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4,
            emailId: '',
            emailUser: '',
            name: '',
            ProfileImage: '',
            userid: '',
            userName: '',
            email: '',
            profileImage: '',
        };
    }


    render() {
        return (
            <Container>
                <Content
                    bounces={false}
                    style={{ flex: 1, }}>
                    <ScrollView>
                        <View style={{ alignItems: 'center' }}>
                            <ImageBackground source={require("../assets/image.png")}
                                style={{ height: 180, width: '100%',alignItems:'center' }}
                            >
                                 <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 100 / 2, marginTop: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require("../assets/images.jpeg")}
                                    style={{ width: 90, height: 90, borderRadius: 90 / 2 }}
                                />
                            </View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold',color:'white' }}>John Smith</Text>
                            <Text style={{ fontSize: 14,color:'white' }}>johnsmith@gmail.com</Text>

                            </ImageBackground>

                           

                            <View style={{ width: '100%', flexDirection: 'column' }}>


                                <TouchableOpacity onPress={() => Actions.push("Profile")} style={{ marginTop: 30, height: 40, marginLeft: 25, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require("../assets/Artboard9.png")}
                                        style={{
                                            width: 20, height: 20,
                                            resizeMode: 'contain'
                                        }} ></Image>
                                    <Text style={{ fontSize: 16, marginLeft: 10, }}>{strings.my_profile}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Actions.push("History")} style={{ marginTop: 10, height: 40, marginLeft: 25, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require("../assets/Artboard7.png")}
                                        style={{ width: 20, height: 20, resizeMode: 'contain' }} ></Image>
                                    <Text style={{ fontSize: 16, marginLeft: 10, }}>{strings.a_venir}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Actions.push("InterventionDetails")} style={{ marginTop: 10, height: 40, marginLeft: 25, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require("../assets/Artboard1.png")}
                                        style={{ width: 20, height: 20, resizeMode: 'contain' }} ></Image>
                                    <Text style={{ fontSize: 16, marginLeft: 10, }}>{strings.Historiques_text}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Actions.push("Notification")} style={{ marginTop: 10, height: 40, marginLeft: 25, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require("../assets/Artboard2.png")}
                                        style={{ width: 20, height: 20, resizeMode: 'contain' }} ></Image>
                                    <Text style={{ fontSize: 16, marginLeft: 10, }}>{strings.Notifications_text}</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity onPress={() => Actions.push("Category")} style={{ marginTop: 10, height: 40, marginLeft: 25, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require("../assets/Artboard3.png")}
                                        style={{ width: 20, height: 20, resizeMode: 'contain' }} ></Image>
                                    <Text style={{ fontSize: 16, marginLeft: 10, }}>{strings.mes_comptences_text}</Text>
                                </TouchableOpacity>

                                {/* <TouchableOpacity onPress={() => Actions.push("Support")} style={{ marginTop: 10, height: 40, marginLeft: 25, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require("../assets/Artboard4.png")}
                                        style={{ width: 20, height: 20, resizeMode: 'contain' }} ></Image>
                                    <Text style={{ fontSize: 16, marginLeft: 10, }}>{strings.devenir_text}</Text>
                                </TouchableOpacity> */}

                                <TouchableOpacity onPress={() => Actions.push("Contacts")} style={{ marginTop: 10, height: 40, marginLeft: 25, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require("../assets/Artboard5.png")}
                                        style={{ width: 20, height: 20, resizeMode: 'contain' }} ></Image>
                                    <Text style={{ fontSize: 16, marginLeft: 10, }}>{strings.nous_contact_text}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Actions.push("Support")} style={{ marginTop: 10, height: 40, marginLeft: 25, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require("../assets/Artboard8.png")}
                                        style={{ width: 20, height: 20, resizeMode: 'contain' }} ></Image>
                                    <Text style={{ fontSize: 16, marginLeft: 10, }}>{strings.faq_text}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ marginTop: 10, marginBottom: 40, height: 40, marginLeft: 25, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require("../assets/Artboard6.png")}
                                        style={{ width: 20, height: 20, resizeMode: 'contain' }} ></Image>
                                    <Text style={{ fontSize: 16, marginLeft: 10, }}>{strings.logout_text}</Text>
                                </TouchableOpacity>


                            </View>
                        </View>
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}

export default SideBar