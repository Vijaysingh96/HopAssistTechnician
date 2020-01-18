import React from 'react';
import { StatusBar, ScrollView, TextInput, View,ActivityIndicator, ImageBackground, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from "../styles/styles";
import Strings from '../strings/strings';
import ImagePicker from 'react-native-image-picker';
import { FlatGrid } from 'react-native-super-grid';
import RNGooglePlaces from 'react-native-google-places';
import RNFetchBlob from 'rn-fetch-blob';
import Geolocation from '@react-native-community/geolocation';
import DateTimePicker from "react-native-modal-datetime-picker";
import PopupDialog, {
    DialogTitle, DialogContent, DialogFooter, DialogButton, SlideAnimation, ScaleAnimation,
} from 'react-native-popup-dialog';


const { width, height } = Dimensions.get("window");

export default class register extends React.Component {

    constructor(props, context) {
        super(props);
        this.state = {
            animating: false,
            lodingDialog: false,
            Particulier_radio: false,
            Entreprise_radio: false,
            chooseTypeCatErr: '',
            yes_radio: false,
            no_radio: false,
            abbonYesNoErr: '',
            fsPath: '',
            checked: false,
            value: null,
            catErr: '',
            address: Strings.Addresse_text,
            addressErr: '',
            first_name: '',
            first_nameErr: '',
            last_name: '',
            last_nameErr: '',
            email: '',
            emailErr: '',
            telephone: '',
            telephoneErr: '',
            password: '',
            passwordErr: '',
            Anniversarie: Strings.Anniversarie_text,
            AnniversarieErr: '',
            reference: '',
            referenceErr: '',
            referenceNo: '',
            referenceNoErr: '',
            SelcetImageErr: '',
            currentLat: '',
            currentLong: '',
            isDateTimePickerVisible:false,
             items :[]
        };
    }

    componentDidMount() {
        this.categoryGet();
      
        Geolocation.getCurrentPosition(info => {

            this.setState({
                currentLat: info.coords.latitude,
                currentLong: info.coords.longitude,
            })

            var pos = {
                lat: info.coords.latitude,
                lng: info.coords.longitude
            };
            console.log("currentLong::" + JSON.stringify(pos))
            // Geocoder.geocodePosition(pos).then(res => {
            //   this.setState({
            //     currentAddress: res[0].formattedAddress
            //   })
            // })
            //   .catch(error => alert(error));
        }
        );
    }

    categoryGet(){
        this.setState({
            animating: true,
            lodingDialog: true,
        }) 
        fetch(Strings.Base_Url + "categories", {
            method: 'GET',
            headers: { // 'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    animating: false,
                    lodingDialog: false,
                    items: responseData
                })

            }
            )
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {

        console.log("A date has been picked: ", date);
              
var date_select = date.toString().substr(3, 12);
        this.setState({
            Anniversarie: date_select
        })
        this.hideDateTimePicker();
    };

    validationRegister() {
        var isValidate = 0;
        if (this.state.first_name != '') {
            isValidate += 1
        } else {
            isValidate -= 1
            this.setState({ first_nameErr: Strings.ShouldemptyText })
        }
        if (this.state.last_name != "") {
            isValidate += 1
        } else {
            isValidate -= 1
            this.setState({ last_nameErr: Strings.ShouldemptyText })
        }
        if (this.state.telephone != "") {
            isValidate += 1
        } else {
            isValidate -= 1
            this.setState({ telephoneErr: Strings.ShouldemptyText })
        }
        if (this.state.email != "") {
            isValidate += 1
            if (this.validateEmail(this.state.email)) {
                isValidate += 1;
            } else {
                isValidate -= 1;
                this.setState({
                    errEmail: "S'il vous plaît entrer email valide",
                });
            }
        } else {
            isValidate -= 1
            this.setState({ emailErr: Strings.ShouldemptyText })
        }
        if (this.state.password != "") {
            isValidate += 1;
            if (this.validatePassword(this.state.password)) {
                isValidate += 1;
            } else {
                isValidate -= 1;
                this.setState({ passwordErr: "La longueur devrait être min 6" });
            }
        } else {
            console.log("cat empty::::");
            isValidate -= 1;
            this.setState({
                passwordErr: Strings.ShouldemptyText,
            });
        }

        if (this.state.address != Strings.Addresse_text) {
            isValidate += 1;

        } else {
            isValidate -= 1;
            this.setState({
                addressErr: Strings.ShouldemptyText,
            });
        }
        
        if (this.state.Anniversarie != Strings.Anniversarie_text) {
            isValidate += 1
        } else {
            isValidate -= 1
            this.setState({
                AnniversarieErr: Strings.ShouldemptyText
            })
        }
        if (this.state.reference != "") {
            isValidate += 1
        } else {
            isValidate -= 1
            this.setState({
                referenceErr: Strings.ShouldemptyText
            })
        }
        if (this.state.Particulier_radio != false || this.state.Entreprise_radio != false) {
            isValidate += 1
            this.setState({ chooseTypeCatErr: '' })
        } else {
            isValidate -= 1
            this.setState({ chooseTypeCatErr: Strings.Type_de_client_text })
        }

        if (this.state.yes_radio != false || this.state.no_radio != false) {
            isValidate += 1
            this.setState({ abbonYesNoErr: '' })
        } else {
            isValidate -= 1
            this.setState({ abbonYesNoErr: "Sélectif d'abbonnements" })
        }

        if (this.state.value != null) {
            isValidate += 1
            this.setState({ catErr: '' })
        } else {
            isValidate -= 1
            this.setState({ catErr: Strings.Type_de_client_text })
        }

        if (this.state.referenceNo != '') {
            isValidate += 1
        } else {
            isValidate -= 1
            this.setState({
                referenceNoErr: Strings.ShouldemptyText
            })
        }
        if (this.state.fsPath != '') {
            isValidate += 1
        } else {
            isValidate -= 1
            this.setState({
                SelcetImageErr: "sélectionné une photo"
            })
        }

        console.log("isvalidate::" + isValidate)

        if (isValidate == 15) {
            this.registerApi();
        }


    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validatePassword(password) {
        if (password.length < 6) {
            return false;
        } else if (password.length > 16) {
            return false;
        } else {
            return true;
        }
    }

    openSearchModal() {
        // RNGooglePlaces.getCurrentPlace(['placeID', 'location', 'name', 'address'])
        // .then((results) => console.log("results:::::"+results))
        // .catch((error) => console.log("message:::::"+error.message));
        RNGooglePlaces.openAutocompleteModal()
            .then((place) => {
                this.setState({

                    addressErr: '',
                    address: place.address,
                    pickup_address: place.address,
                    pickup_latitude: place.location.latitude,
                    pickup_longitude: place.location.longitude
                })
                console.log("latitude:::" + place.location.latitude);
                console.log("longitude:::" + place.location.longitude);
                console.log("address::::" + place.address);
                // place represents user's selection from the
                // suggestions and it is a simplified Google Place object.
            })
            .catch(error => console.log(error.message));  // error is a Javascript Error object
    }

    selectProfilePic = () => {
        const options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images',
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
                console.log("image url:###:" + JSON.stringify(response))
                this.setState({
                    SelcetImageErr: '',
                    fsPath: response.fileName,
                });
                console.log("image url::" + JSON.stringify(imageUrl))
                console.log("image url::" + JSON.stringify(source))

            }
        });
    }
    registerApi() {

          this.setState({
            animating: true,
            lodingDialog: true,
        })

        let headers = {
            'Content-Type': 'application/json',
            // 'User-Id': this.state.userid,
            //   'token': this.state.token,
        };
        RNFetchBlob.fetch('POST', Strings.Base_Url + 'technicians', headers, JSON.stringify({
            "firstname": this.state.first_name,
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vytautas_a/128.jpg",
            "lastname": this.state.last_name,
            "telephone": this.state.telephone,
            "address": this.state.address,
            "technicianType": 2,
            "serviceCategory": this.state.value,
            "username": "Casimer.Cormier",
            "password": this.state.password,
            "currentLat": this.state.currentLat,
            "currentLong": this.state.currentLong,
            "anniversaryDate": this.state.Anniversarie,
            "reference": this.state.reference,
            "referenceCode": this.state.referenceNo,
            "abbonement": true,
            "tncAccept": this.state.checked,
            "photo": this.state.fsPath,
            "email":this.state.email
        }),
        ).then((resp) => {
            console.log("response:::::::" + JSON.stringify(resp.json()));

            var id =JSON.stringify(resp.json().id)
            console.log("response:::::::" +id);
            AsyncStorage.setItem("Technician_Id",id)
            this.setState({
                animating: false,
                lodingDialog: false,
            });
            Actions.push("Login")
        }).catch((err) => {
            this.setState({
                animating: false,
                lodingDialog: false,
            });
            console.log("response::::err:::" + err);
        });
    }
    render() {

       
        return (
            <View style={styles.containerWhite}>
                
                <ImageBackground source={require("../assets/simble.png")}
                    style={{ width: '100%', height: 78, }}>
                    <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => Actions.pop()} style={{ width: '15%', height: 50, justifyContent: 'center', alignItems: 'center', }}>
                            <Image source={require("../assets/back.png")}
                                style={{ width: 25, height: 25, }}
                                resizeMode="contain" />
                        </TouchableOpacity>
                        <View style={{ width: '80%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{Strings.register_text}</Text>

                        </View>

                    </View>
                </ImageBackground>
                <ScrollView style={{marginTop:-20}}>
                    <View style={{ marginTop:  0}}>

                        <Text style={{ padding: 15, fontSize: 14, fontWeight: 'bold' }}>
                            {Strings.new_coplete_text}
                        </Text>


                        <View style={{ margin: 20, width: '90%' }}>
                            {/* <View style={{ width: '100%', height: 45, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.identificant_text}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View> */}
                            <View style={{ width: '100%', height: 45, marginTop: 0, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.prenom_text}
                                    onChangeText={(first_name) => this.setState({ first_name, first_nameErr: '' })}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>
                            {!!this.state.first_nameErr && (
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{this.state.first_nameErr}</Text>
                            )}
                            <View style={{ width: '100%', height: 45, marginTop: 20, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.Nom_de_familee}
                                    onChangeText={(last_name) => this.setState({ last_name, last_nameErr: '' })}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>
                            {!!this.state.last_nameErr && (
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{this.state.last_nameErr}</Text>
                            )}

                            <View style={{ width: '100%', height: 45, borderWidth: 1, marginTop: 20, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.email_address_text}
                                    onChangeText={(email) => this.setState({ email, emailErr: '' })}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>
                            {!!this.state.emailErr && (
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{this.state.emailErr}</Text>
                            )}
                            <View style={{ width: '100%', height: 45, marginTop: 20, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput
                                    keyboardType="decimal-pad"
                                    placeholder={Strings.telephone_text}
                                    onChangeText={(telephone) => this.setState({ telephone, telephoneErr: '' })}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>
                            {!!this.state.telephoneErr && (
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{this.state.telephoneErr}</Text>
                            )}
                            <View style={{ width: '100%', height: 45, marginTop: 20, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.password_text}
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password, passwordErr: '' })}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>
                            {!!this.state.passwordErr && (
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{this.state.passwordErr}</Text>
                            )}

                            <View style={{ width: '100%', height: 45, marginTop: 20, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.re_enter_pass_text}
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password, passwordErr: '' })}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>
                            {!!this.state.passwordErr && (
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{this.state.passwordErr}</Text>
                            )}


                            <TouchableOpacity onPress={() => this.openSearchModal()} style={{ width: '100%', marginTop: 20, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <Text
                                    style={{ padding: 10 }}>
                                    {this.state.address}
                                </Text>
                            </TouchableOpacity>
                            {!!this.state.addressErr && (
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{this.state.addressErr}</Text>
                            )}
                            
                            <TouchableOpacity onPress={this.showDateTimePicker} style={{ width: '100%', height: 45, marginTop: 20, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <Text placeholder={Strings.Anniversarie_text}
                                    onChangeText={(Anniversarie) => this.setState({ Anniversarie, AnniversarieErr: '' })}
                                    style={{ padding: 10 }}>
                                        {this.state.Anniversarie}

                                </Text>
                                <DateTimePicker
                                    isVisible={this.state.isDateTimePickerVisible}
                                    onConfirm={this.handleDatePicked}
                                    onCancel={this.hideDateTimePicker}
                                />
                            </TouchableOpacity>
                            {!!this.state.AnniversarieErr && (
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{this.state.AnniversarieErr}</Text>
                            )}
                            <View style={{ width: '100%', height: 45, marginTop: 20, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.Homme_text}
                                    onChangeText={(reference) => this.setState({ reference, referenceErr: '' })}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>
                            {!!this.state.referenceErr && (
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{this.state.referenceErr}</Text>
                            )}


                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                    {Strings.Type_de_client_text}
                                </Text>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <View style={{ width: '60%', flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => this.setState({ Particulier_radio: true, Entreprise_radio: false })} style={{ width: '20%', height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ width: 20, height: 20, borderWidth: 2, borderRadius: 20 / 2, alignItems: 'center', justifyContent: 'center', borderColor: Strings.light_color }}>
                                                {this.state.Particulier_radio === true && (<View style={{ width: 16, height: 16, borderRadius: 16 / 2, backgroundColor: '#01A2C4', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Image source={require("../assets/right.png")}
                                                        style={{ width: 10, height: 10, }}
                                                        resizeMode="contain" />
                                                </View>)}

                                            </View>
                                        </TouchableOpacity>
                                        <View style={{ alignItems: 'center', marginLeft: 10, justifyContent: 'center' }}>
                                            <Text>{Strings.Particulier_text}</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '40%', flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => this.setState({ Particulier_radio: false, Entreprise_radio: true, })} style={{ width: '20%', height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ width: 20, height: 20, borderWidth: 2, borderRadius: 20 / 2, alignItems: 'center', justifyContent: 'center', borderColor: Strings.light_color }}>
                                                {this.state.Entreprise_radio === true && (<View style={{ width: 16, height: 16, borderRadius: 16 / 2, backgroundColor: '#01A2C4', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Image source={require("../assets/right.png")}
                                                        style={{ width: 10, height: 10, }}
                                                        resizeMode="contain" />
                                                </View>)}

                                            </View>
                                        </TouchableOpacity>
                                        <View style={{ alignItems: 'center', marginLeft: 20, justifyContent: 'center' }}>
                                            <Text>{Strings.Entreprise_text}</Text>
                                        </View>
                                    </View>
                                </View>


                            </View>

                            {!!this.state.chooseTypeCatErr && (
                                <Text style={{ color: 'red', marginLeft: 10, marginTop: 10, fontSize: 12 }}>{this.state.chooseTypeCatErr}</Text>
                            )}

                            <View style={{ marginTop: 30 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                    {Strings.categoty_req_text}
                                </Text>
                                {!!this.state.catErr && (
                                    <Text style={{ color: 'red', marginLeft: 10, marginTop: 10, fontSize: 12 }}>{this.state.catErr}</Text>
                                )}


                                <FlatGrid
                                    itemDimension={130}
                                    items={this.state.items}
                                    style={{ marginBottom: 0 }}
                                    // staticDimension={300}
                                    // fixed
                                    // spacing={20}
                                    renderItem={({ item, index }) => (
                                        <View>
                                            <TouchableOpacity onPress={() => this.setState({ value: item.id })} style={[{
                                                justifyContent: 'center', alignItems: 'center',
                                                borderRadius: 5,
                                                flexDirection: 'row',
                                                padding: 5,
                                                height: 100,


                                            }, { backgroundColor: 'white' }]}>

                                                <View style={{ width: '20%', height: 50, justifyContent: 'center' }}>
                                                    <TouchableOpacity onPress={() => this.setState({ value: item.id })} style={{ width: '20%', height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                                        <View style={{ width: 20, height: 20, borderWidth: 2, borderRadius: 20 / 2, alignItems: 'center', justifyContent: 'center', borderColor: Strings.light_color }}>
                                                            {this.state.value === item.id && (<View style={{ width: 16, height: 16, borderRadius: 16 / 2, backgroundColor: '#01A2C4', alignItems: 'center', justifyContent: 'center' }}>
                                                                <Image source={require("../assets/right.png")}
                                                                    style={{ width: 10, height: 10, }}
                                                                    resizeMode="contain" />
                                                            </View>)}

                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ width: '80%', alignItems: 'center' }}>
                                                    <Image source={{ uri: item.avatar} }
                                                        style={{ width: 50, height: 50, }}
                                                        resizeMode="contain" />
                                                    <Text style={{ fontSize: 14 }}>{item.name}</Text>


                                                </View>

                                            </TouchableOpacity>
                                        </View>
                                    )}
                                />

                            </View>


                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                    {Strings.Abbonement_text}
                                </Text>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <View style={{ width: '50%', flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => this.setState({ yes_radio: true, no_radio: false })} style={{ width: '20%', height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ width: 20, height: 20, borderWidth: 2, borderRadius: 20 / 2, alignItems: 'center', justifyContent: 'center', borderColor: Strings.light_color }}>
                                                {this.state.yes_radio === true && (<View style={{ width: 16, height: 16, borderRadius: 16 / 2, backgroundColor: '#01A2C4', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Image source={require("../assets/right.png")}
                                                        style={{ width: 10, height: 10, }}
                                                        resizeMode="contain" />
                                                </View>)}

                                            </View>
                                        </TouchableOpacity>
                                        <View style={{ alignItems: 'center', marginLeft: 10, justifyContent: 'center' }}>
                                            <Text>{"Oui"}</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '50%', flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => this.setState({ yes_radio: false, no_radio: true })} style={{ width: '20%', height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ width: 20, height: 20, borderWidth: 2, borderRadius: 20 / 2, alignItems: 'center', justifyContent: 'center', borderColor: Strings.light_color }}>
                                                {this.state.no_radio === true && (<View style={{ width: 16, height: 16, borderRadius: 16 / 2, backgroundColor: '#01A2C4', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Image source={require("../assets/right.png")}
                                                        style={{ width: 10, height: 10, }}
                                                        resizeMode="contain" />
                                                </View>)}

                                            </View>
                                        </TouchableOpacity>
                                        <View style={{ alignItems: 'center', marginLeft: 20, justifyContent: 'center' }}>
                                            <Text>{"Non"}</Text>
                                        </View>
                                    </View>
                                </View>


                            </View>

                            {!!this.state.abbonYesNoErr && (
                                <Text style={{ color: 'red', marginLeft: 10, marginTop: 10, fontSize: 12 }}>{this.state.abbonYesNoErr}</Text>
                            )}

                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                    {Strings.reference_no_text}
                                </Text>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>

                                    <View style={{ width: '100%', height: 45, marginTop: 10, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                        <TextInput placeholder={"#9875656"}
                                            onChangeText={(referenceNo) => this.setState({ referenceNo, referenceNoErr: '' })}
                                            style={{ padding: 10 }}>
                                        </TextInput>
                                    </View>

                                </View>
                            </View>
                            {!!this.state.referenceNoErr && (
                                <Text style={{ color: 'red', marginLeft: 10, marginTop: 10, fontSize: 12 }}>{this.state.referenceNoErr}</Text>
                            )}

                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                    {Strings.Ajouter_une_photo_text}
                                </Text>
                                {/* sélectionné une photo */}
                                <TouchableOpacity onPress={this.selectProfilePic} style={{ alignItems: 'center', justifyContent: 'center', width: '50%', height: 40, marginTop: 10, borderRadius: 10, backgroundColor: '#01A2C4' }}>
                                    <Text style={{ fontSize: 14, color: 'white' }}>{Strings.Prendre_votre_photo_text}</Text>

                                </TouchableOpacity>
                                {!!this.state.SelcetImageErr && (
                                    <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{this.state.SelcetImageErr}</Text>
                                )}
                                <Text style={{ fontSize: 14, padding: 5, width: '100%' }}>
                                    {this.state.fsPath}
                                </Text>


                            </View>



                            <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.setState({ checked: !this.state.checked })} style={{ width: '10%', justifyContent: 'center' }}>
                                    <View style={{ width: 20, height: 20, borderWidth: 2, alignItems: 'center', justifyContent: 'center', borderColor: Strings.light_color }}>
                                        {this.state.checked === true && (<View style={{ width: 20, height: 20, backgroundColor: '#01A2C4', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require("../assets/right.png")}
                                                style={{ width: 10, height: 10, }}
                                                resizeMode="contain" />
                                        </View>)}
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{Strings.J_accepte_les_text}</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#01A2C4' }}>{Strings.term_cinditions}</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{Strings.hop_assist}</Text>
                            </View>



                            <View style={{ width: '100%', alignItems: 'center', marginTop: 30, marginBottom: 30 }}>
                                {this.state.checked === false ? <View style={{ width: '50%', height: 40, borderRadius: 10, backgroundColor: Strings.light_color, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, color: 'white' }}>{Strings.Inscrire_Maintenant_text}</Text>
                                </View> : <TouchableOpacity onPress={() => this.validationRegister()} style={{ width: '50%', height: 40, borderRadius: 10, backgroundColor: '#01A2C4', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 16, color: 'white' }}>{Strings.Inscrire_Maintenant_text}</Text>
                                    </TouchableOpacity>
                                }
                            </View>
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
