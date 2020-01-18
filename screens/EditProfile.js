import React from 'react';
import { ActivityIndicator, StatusBar, Button, FlatList, ScrollView, PixelRatio, TextInput, View, ImageBackground, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from "../styles/styles";
import Strings from '../strings/strings'
import RNFetchBlob from 'rn-fetch-blob';
import ImagePicker from 'react-native-image-picker';
import { Card } from 'native-base';
import PopupDialog, {
    DialogTitle, DialogContent, DialogFooter, DialogButton, SlideAnimation, ScaleAnimation,
} from 'react-native-popup-dialog';
import DateTimePicker from "react-native-modal-datetime-picker";
import Moment from 'moment';


export default class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: false,
            lodingDialog: false,
            Technician_Id: '',
            first_name: '',
            last_name: '',
            address: '',
            email: '',
            gender: '',
            telephone: '',
            Anniversarie: '',
            avatar: '',
            first_nameErr: '',
            last_nameErr: '',
            telephoneErr: '',
            errEmail: '',
            addressErr: '',
            AnniversarieErr: '',
            isDateTimePickerVisible: false,
        };

    }

    componentDidMount() {
        this.getProfileUser();
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
        var date_select = Moment(date_select).format('DD-MM-YYYY')
        this.setState({
            Anniversarie: date_select
        })
        this.hideDateTimePicker();
    };

    getProfileUser() {

        AsyncStorage.getItem("Technician_Id")
            .then(Technician_Id => {
                console.log("user id @:::" + Technician_Id)
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
                            Anniversarie:Moment(responseData.anniversaryDate).format('DD-MM-YYYY'),
                            avatar: responseData.avatar
                        })

                        console.log("responseData:::" + responseData.id)

                    }
                    )
            })
    }

    validation() {

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
            this.setState({ errEmail: Strings.ShouldemptyText })
        }


        if (this.state.address != '') {
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

        console.log("isvalidate::" + isValidate)

        if (isValidate == 7) {
            this.editProfile();
        }


    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    editProfile() {
        this.setState({
            animating: true,
            lodingDialog: true,
        })
        let headers = {
            'Content-Type': 'application/json',
            // 'User-Id': this.state.userid,
            //   'token': this.state.token,
        };
        RNFetchBlob.fetch('PUT', Strings.Base_Url + 'technicians/' + this.state.Technician_Id, headers, JSON.stringify({
            "id": this.state.Technician_Id,
            "firstname": this.state.first_name,
            "lastname":this.state.last_name,
            "email": this.state.email,
            "telephone": this.state.telephone,
            "avatar": this.state.fsPath,
            "aniversary": this.state.Anniversarie,
            "address": this.state.address,

        }),
        ).then((resp) => {

            console.log("response:::::::" + JSON.stringify(resp.json()));
            this.setState({
                animating: false,
                lodingDialog: false,
            });
            Actions.push("Profile")
        }).catch((err) => {
            this.setState({
                animating: false,
                lodingDialog: false,
            });
            console.log("response::::err:::" + err);
        });
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
                    <TouchableOpacity style={{ width: '15%', height: 50, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
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
                            {this.state.isImageAvailable == true ? <Image source={this.state.profilePic}
                                style={{ width: 95, height: 95, borderRadius: 95 / 2 }}
                            /> : <Image source={require("../assets/images.jpeg")}
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

                            <Text style={{ fontSize: 16, paddingLeft: 10, marginTop: 30 }}>{Strings.prenom_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 10, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                                <TextInput
                                    onChangeText={(first_name) => this.setState({ first_name, first_nameErr: '' })}
                                    placeholder="Smith" style={{ fontSize: 15, padding: 10 }}>
                                    {this.state.first_name}
                                </TextInput>
                            </Card>
                            {!!this.state.first_nameErr && (
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{this.state.first_nameErr}</Text>
                            )}
                            <Text style={{ fontSize: 16, paddingLeft: 10, marginTop: 30 }}>{Strings.Nom_de_familee}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 10, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>
                                <TextInput
                                    onChangeText={(last_name) => this.setState({ last_name, last_nameErr: '' })}
                                    placeholder="Smith" style={{ fontSize: 15, padding: 10 }}>
                                    {this.state.last_name}
                                </TextInput>
                            </Card>

                            {!!this.state.last_nameErr && (
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{this.state.last_nameErr}</Text>
                            )}

                            <Text style={{ fontSize: 16, paddingLeft: 10, marginTop: 30 }}>{Strings.telephone_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 10, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>

                                <TextInput
                                    onChangeText={(telephone) => this.setState({ telephone, telephoneErr: '' })}
                                    placeholder="+33 123456" style={{ fontSize: 15, padding: 10 }}>
                                    {this.state.telephone}
                                </TextInput>
                            </Card>

                            {!!this.state.telephoneErr && (
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{this.state.telephoneErr}</Text>
                            )}

                            <Text style={{ fontSize: 16, paddingLeft: 10, marginTop: 30 }}>{Strings.email_address_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 10, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>

                                <TextInput
                                    onChangeText={(email) => this.setState({ email, errEmail: '' })}
                                    placeholder="johnsmith@gmail.com" style={{ fontSize: 15, padding: 10 }}>
                                    {this.state.email}
                                </TextInput>
                            </Card>
                            {!!this.state.errEmail && (
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{this.state.errEmail}</Text>
                            )}

                            <Text style={{ fontSize: 16, paddingLeft: 10, marginTop: 30 }}>{Strings.Addresse_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 10, backgroundColor: 'white', marginTop: 10, justifyContent: 'center' }}>

                                <TextInput
                                    onChangeText={(address) => this.setState({ address, addressErr: '' })}
                                    placeholder="address" style={{ fontSize: 15, padding: 10 }}>
                                    {this.state.address}
                                </TextInput>

                            </Card>
                            {!!this.state.addressErr && (
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{this.state.addressErr}</Text>
                            )}

                            <Text style={{ fontSize: 16, paddingLeft: 10, marginTop: 30 }}>{Strings.Anniversarie_text}</Text>
                            <Card style={{ width: '100%', height: 40, borderRadius: 10, backgroundColor: 'white', marginTop: 10, justifyContent: 'center', marginBottom: 50 }}>
                                <TouchableOpacity onPress={this.showDateTimePicker}>
                                <Text
                                    onChangeText={(Anniversarie) => this.setState({ Anniversarie, AnniversarieErr: '' })}
                                    placeholder="31/10/2019" style={{ fontSize: 15, padding: 10 }}>
                                    {this.state.Anniversarie}
                                </Text>
                                <DateTimePicker
                                    isVisible={this.state.isDateTimePickerVisible}
                                    onConfirm={this.handleDatePicked}
                                    onCancel={this.hideDateTimePicker}
                                />
                                </TouchableOpacity>
                            </Card>
                            {!!this.state.AnniversarieErr && (
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>{this.state.AnniversarieErr}</Text>
                            )}

                        </View>
                        <Card style={{ width: '50%', height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: Strings.color_green_code, marginBottom: 40 }}>
                            <TouchableOpacity onPress={() => this.validation()} style={{ width: '100%', height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: Strings.color_green_code }}>
                                <Text style={{ fontSize: 16, color: 'white' }}> Mattre A Jour</Text>
                            </TouchableOpacity>
                        </Card>

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
