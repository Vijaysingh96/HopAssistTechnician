import React from 'react';
import { StatusBar, Button, FlatList, ScrollView, PixelRatio, TextInput, View, ImageBackground, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from "../styles/styles";
import Strings from '../strings/strings'
import { Card } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-elements';


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


        };

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
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{Strings.my_profile}</Text>
                    </View>
                    <TouchableOpacity onPress={() => Actions.push("EditProfile")} style={{ width: '15%', height: 50, justifyContent: 'center', alignItems: 'center', }}>
                        <Image source={require("../assets/edit-button.png")}
                            style={{ width: 25, height: 25, }}
                            resizeMode="contain" />
                    </TouchableOpacity>
                    
                </View>
                <ScrollView>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                        <Image source={require("../assets/image.png")}
                            style={{ height: 180, }}
                        />
                        <View style={{ width: 120, height: 120, backgroundColor: 'white', borderRadius: 120 / 2, marginTop: -80, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require("../assets/images.jpeg")}
                                style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
                            />
                        </View>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Hardley Peter</Text>

                        <View style={{ width: '80%', flexDirection: 'column', marginTop: 30 }}>
                            

                            <Text style={{ fontSize: 16, paddingLeft: 10 ,marginTop:30}}>{Strings.Nom_de_familee}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 40, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, padding: 10 }}>Hardley Peter</Text>
                            </Card>

                            {/* <Text style={{ fontSize: 16, paddingLeft: 10 ,marginTop:30}}>{Strings.Addresse_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 40, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, padding: 10 }}>23, Simple France</Text>
                            </Card> */}

                            <Text style={{ fontSize: 16, paddingLeft: 10 ,marginTop:30}}>{Strings.telephone_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 40, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, padding: 10 }}>+33 123456</Text>
                            </Card>

                            <Text style={{ fontSize: 16, paddingLeft: 10 ,marginTop:30}}>{Strings.email_address_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 40, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, padding: 10 }}>johnsmith@gmail.com</Text>
                            </Card>

                            <Text style={{ fontSize: 16, paddingLeft: 10 ,marginTop:30}}>{"Sexe"}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 40, backgroundColor: 'white', marginTop: 10, justifyContent: 'center'}}>
                                <Text style={{ fontSize: 16, padding: 10 }}>Homme</Text>
                            </Card>

                            <Text style={{ fontSize: 16, paddingLeft: 10 ,marginTop:30}}>{Strings.Anniversarie_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 40, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' ,marginBottom:50}}>
                                <Text style={{ fontSize: 16, padding: 10 }}>31/10/2019</Text>
                            </Card>

                            

                           

                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
