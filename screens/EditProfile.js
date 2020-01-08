import React from 'react';
import { StatusBar, Button, FlatList, ScrollView, PixelRatio, TextInput, View, ImageBackground, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from "../styles/styles";
import Strings from '../strings/strings'
import ImagePicker from 'react-native-image-picker';
import { Card } from 'native-base';




export default class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


        };

    }

    selectProfilePic = () => {
        const options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images',
                profilePic: '',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                const imageUrl = response.uri
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                AsyncStorage.setItem("profilePic", JSON.stringify(source));
                this.setState({
                    profilePic: source,
                    isImageAvailable: true,
                    image_Url: response.uri,
                    fsPath: response.data,
                });
                console.log("image url::" + JSON.stringify(imageUrl))
                console.log("image url::" + JSON.stringify(source))
            }
        });
    }


    render() {
        return (
            <View style={styles.containerWhite}>
                <View style={{ width: '100%', height: 50, flexDirection: 'row', backgroundColor: 'white' }}>
                    <TouchableOpacity onPress={() => Actions.pop()} style={{ width: '15%', height: 50, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
                        <Image source={require("../assets/back.png")}
                            style={{ width: 30, height: 20, }}
                            resizeMode="contain" />
                    </TouchableOpacity>
                    <View style={{ width: '70%', height: 50, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{"Modifier le profil "}</Text>
                    </View>
                    <TouchableOpacity  style={{ width: '15%', height: 50, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
                        <Image source={require("../assets/check.png")}
                            style={{ width: 30, height: 20, }}
                            resizeMode="contain" />
                    </TouchableOpacity>
                    

                </View>
                <ScrollView>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                        <Image source={require("../assets/image.png")}
                            style={{ height: 180, }}
                        />
                        <TouchableOpacity onPress={this.selectProfilePic} style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 100 / 2, marginTop: -70, alignItems: 'center', justifyContent: 'center' }}>
                           {this.state.isImageAvailable == true ?<Image source={this.state.profilePic}
                                style={{ width: 95, height: 95, borderRadius: 95 / 2 }}
                            />:<Image source={require("../assets/images.jpeg")}
                            style={{ width: 95, height: 95, borderRadius: 95 / 2 }}
                        />

                           }
                            
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.selectProfilePic} style={{ width: 25, height: 25, backgroundColor: Strings.color_green_code, borderRadius: 25 / 2, marginTop: -35, marginLeft: 81, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require("../assets/pencil.png")}
                                style={{ width: 15, height: 15, }}
                                resizeMode="contain" />
                        </TouchableOpacity>

                        <View style={{ width: '80%', flexDirection: 'column', marginTop: 60 }}>
                           

                            <Text style={{ fontSize: 16, paddingLeft: 10, marginTop: 30 }}>{Strings.Nom_de_familee}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 10, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                                <TextInput placeholder="Smith" style={{ fontSize: 15, padding: 10 }}></TextInput>
                            </Card>

                            <Text style={{ fontSize: 16, paddingLeft: 10, marginTop: 30 }}>{Strings.telephone_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 10, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                                
                                <TextInput placeholder="+33 123456" style={{ fontSize: 15, padding: 10 }}></TextInput>
                            </Card>

                            <Text style={{ fontSize: 16, paddingLeft: 10, marginTop: 30 }}>{Strings.email_address_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 10, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                               
                                <TextInput placeholder="johnsmith@gmail.com" style={{ fontSize: 15, padding: 10 }}></TextInput>
                            </Card>

                            <Text style={{ fontSize: 16, paddingLeft: 10, marginTop: 30 }}>{"Sexe"}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 10, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                              
                                <TextInput placeholder="Homme" style={{ fontSize: 15, padding: 10 }}></TextInput>

                            </Card>

                            <Text style={{ fontSize: 16, paddingLeft: 10, marginTop: 30 }}>{Strings.Anniversarie_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 10, backgroundColor: 'white', marginTop: 10, justifyContent: 'center', marginBottom: 50 }}>
                                
                                <TextInput placeholder="31/10/2019" style={{ fontSize: 15, padding: 10 }}></TextInput>
                            </Card>

                        </View>
                       <Card style={{width:'50%',height:40,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:Strings.color_green_code,marginBottom:40}}>
                       <TouchableOpacity style={{width:'100%',height:40,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:Strings.color_green_code}}>
                            <Text style={{fontSize:16,color:'white'}}> Mattre A Jour</Text>
                        </TouchableOpacity>
                       </Card>
                       

                    </View>
                </ScrollView>
            </View>
        );
    }
}
