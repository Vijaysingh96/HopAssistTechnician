import React from 'react';
import { StatusBar, Button, FlatList, ScrollView, PixelRatio, TextInput, View, ImageBackground, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from "../styles/styles";
import Strings from '../strings/strings'
import { Card } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-elements';


export default class interventionDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           

        };

    }

    
    render() {
        return (
            <View style={styles.containerWhite}>
                <View style={{ width: '100%', height: 50, flexDirection: 'row', backgroundColor: 'white' }}>
                    <TouchableOpacity onPress={() => Actions.pop()} style={{ width: '20%', height: 50, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
                        <Image source={require("../assets/back.png")}
                            style={{ width: 30, height: 20, }}
                            resizeMode="contain" />
                    </TouchableOpacity>
                    <View style={{ width: '70%', height: 50, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{Strings.l_intervention_text}</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                        <Image source={require("../assets/image.png")}
                            style={{ width: '100%', height: 150, backgroundColor: 'red' }}
                        />

                        <View style={{ width: 100, height: 100, borderRadius: 100 / 2, backgroundColor: 'white', marginTop: -50, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require("../assets/images.jpeg")}
                                style={{ width: 95, height: 95, borderRadius: 95 / 2 }} />
                        </View>

                        <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>John Smith</Text>
                        <Text style={{ fontSize: 16,marginBottom:10 }}>johnsmith@gmail.com</Text>
                       
                        <AirbnbRating
                            showRating={false}
                            count={5}
                            color={Strings.color_green_code}
                            defaultRating={3}
                            size={15} />
                        <View style={{width:'90%',marginTop:40,marginBottom:50}}>
                            <Text style={{fontSize:16,fontWeight:'bold'}}>{Strings.information_text}</Text>
                            <Card style={{width:'100%',backgroundColor:'white',borderRadius:10,flexDirection:'column',marginTop:15}}>
                                <View style={{width:'100%',flexDirection:'row',margin:10}}>
                                    <View style={{width:'50%'}}>
                                        <Text style={{color:Strings.color_green_code}}>{Strings.status_text}</Text>
                                    </View>
                                    <View style={{width:'50%'}}>
                                    <Text>{"Finir le travail"}</Text>
                                    </View>
                                </View>
                                <View style={{width:'100%',flexDirection:'row',margin:10}}>
                                    <View style={{width:'50%'}}>
                                        <Text style={{color:Strings.color_green_code}}>{Strings.numero_identification_text}</Text>
                                    </View>
                                    <View style={{width:'50%'}}>
                                    <Text>{"1234546"}</Text>
                                    </View>
                                </View>

                                <View style={{width:'100%',flexDirection:'row',margin:10}}>
                                    <View style={{width:'50%'}}>
                                        <Text style={{color:Strings.color_green_code}}>{Strings.temp_de_text}</Text>
                                    </View>
                                    <View style={{width:'50%'}}>
                                    <Text>{"5:56PM,05-05-2018"}</Text>
                                    </View>
                                </View>
                                <View style={{width:'100%',flexDirection:'row',margin:10}}>
                                    <View style={{width:'50%'}}>
                                        <Text style={{color:Strings.color_green_code}}>{Strings.Addresse_text}</Text>
                                    </View>
                                    <View style={{width:'50%'}}>
                                    <Text>{"23,simple streets,France simple streets"}</Text>
                                    </View>
                                </View>

                                <View style={{width:'100%',flexDirection:'row',margin:10}}>
                                    <View style={{width:'50%'}}>
                                        <Text style={{color:Strings.color_green_code}}>{Strings.category_text}</Text>
                                    </View>
                                    <View style={{width:'50%'}}>
                                    <Text>{"PC,Windows"}</Text>
                                    </View>
                                </View>

                                <View style={{width:'100%',flexDirection:'row',margin:10}}>
                                    <View style={{width:'50%'}}>
                                        <Text style={{color:Strings.color_green_code}}>{Strings.mots_text}</Text>
                                    </View>
                                    <View style={{width:'50%'}}>
                                    <Text>{"Text"}</Text>
                                    </View>
                                </View>

                                <View style={{width:'100%',flexDirection:'row',margin:10}}>
                                    <View style={{width:'50%'}}>
                                        <Text style={{color:Strings.color_green_code}}>{Strings.commande_text}</Text>
                                    </View>
                                    <View style={{width:'50%'}}>
                                    <Text>{"05-05-2018,5:56PM"}</Text>
                                    </View>
                                </View>
                            </Card>
                        </View>

                       
                    </View>
                </ScrollView>
            </View>
        );
    }
}
