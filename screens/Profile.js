import React from 'react';
import { ActivityIndicator,StatusBar, Button, FlatList, ScrollView, PixelRatio, TextInput, View, ImageBackground, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from "../styles/styles";
import Strings from '../strings/strings'
import { Card } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-elements';
import PopupDialog, {
    DialogTitle, DialogContent, DialogFooter, DialogButton, SlideAnimation, ScaleAnimation,
} from 'react-native-popup-dialog';
import Moment from 'moment';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: false,
            lodingDialog: false,
            first_name: '',
            last_name: '',
            address: '',
            email: '',
            gender: '',
            telephone: '',
            Anniversarie: '',
            avatar:'',
        };

    }

    componentDidMount() {
        this.getProfileUser();
    }

    getProfileUser() {
       
        
            AsyncStorage.getItem("Technician_Id")
            .then(Technician_Id => {
                console.log("user id @:::"+Technician_Id)
                var Technician_Id = JSON.parse(Technician_Id);
                this.setState({ Technician_Id: Technician_Id });
                  
        this.setState({
            animating: true,
            lodingDialog: true,
        })
        fetch(Strings.Base_Url + "technicians/" + Technician_Id, {
            method: 'GET',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseData) => {

                this.setState({
                    animating: false,
                    lodingDialog: false,
                    first_name: responseData.firstname,
                    last_name: responseData.lastname,
                    address: responseData.address,
                    email: responseData.email,
                    gender: responseData.gender,
                    telephone: responseData.telephone,
                    Anniversarie: Moment(responseData.anniversaryDate).format('DD-MM-YYYY'),
                    avatar:responseData.avatar
                })

                console.log("responseData:::" + responseData.id)

            }
            )
        })
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
                        <Text style={{fontSize:16,fontWeight:'bold'}}>{this.state.first_name +" "+this.state.last_name}</Text>

                        <View style={{ width: '80%', flexDirection: 'column', marginTop: 30 }}>
                            

                            <Text style={{ fontSize: 16, paddingLeft: 10 ,marginTop:30}}>{Strings.prenom_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 40, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, padding: 10 }}>{this.state.first_name}</Text>
                            </Card>

                            <Text style={{ fontSize: 16, paddingLeft: 10 ,marginTop:30}}>{Strings.Nom_de_familee}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 40, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, padding: 10 }}>{this.state.last_name}</Text>
                            </Card>

                            <Text style={{ fontSize: 16, paddingLeft: 10 ,marginTop:30}}>{Strings.Addresse_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 40, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, padding: 10 }}>{this.state.address}</Text>
                            </Card>

                            <Text style={{ fontSize: 16, paddingLeft: 10 ,marginTop:30}}>{Strings.telephone_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 40, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, padding: 10 }}>{this.state.telephone}</Text>
                            </Card>

                            <Text style={{ fontSize: 16, paddingLeft: 10 ,marginTop:30}}>{Strings.email_address_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 40, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, padding: 10 }}>{this.state.email}</Text>
                            </Card>

                            {/* <Text style={{ fontSize: 16, paddingLeft: 10 ,marginTop:30}}>{"Sexe"}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 40, backgroundColor: 'white', marginTop: 10, justifyContent: 'center'}}>
                                <Text style={{ fontSize: 16, padding: 10 }}>{this.state.gender}</Text>
                            </Card> */}

                            <Text style={{ fontSize: 16, paddingLeft: 10 ,marginTop:30}}>{Strings.Anniversarie_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 40, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' ,marginBottom:50}}>
                                <Text style={{ fontSize: 16, padding: 10 }}>{this.state.Anniversarie}</Text>
                            </Card>
                        </View>

                        <PopupDialog
                            onHardwareBackPress={() => { this.setState({ lodingDialog: false }) }}
                            width={0.3}
                            visible={this.state.lodingDialog}
                            dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}>
                            <DialogContent>
                                <View style={{ alignItems: 'center', }}>
                                    <ActivityIndicator
                                        animating={this.state.animating}
                                        style={[{ height: 10, marginBottom: 10, marginTop: 30, marginLeft: 20, marginRight: 20 }]}
                                        color="#C00"
                                        size="large"
                                        hidesWhenStopped={true}
                                    />
                                </View>
                            </DialogContent>
                        </PopupDialog>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
