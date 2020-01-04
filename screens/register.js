import React from 'react';
import { StatusBar, ScrollView, TextInput, View, ImageBackground, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from "../styles/styles";
import Strings from '../strings/strings';
import ImagePicker from 'react-native-image-picker';
import { FlatGrid } from 'react-native-super-grid';



const { width, height } = Dimensions.get("window");

export default class register extends React.Component {

    constructor(props, context) {
        super(props);
        this.state = {
            Particulier_radio: false,
            Entreprise_radio: false,
            Clienten_radio: false,
           yes_radio:false,
           no_radio:false,
            fsPath: '',
            checked: false,

        };
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
                    fsPath: response.fileName,
                });
                console.log("image url::" + JSON.stringify(imageUrl))
                console.log("image url::" + JSON.stringify(source))

            }
        });
    }

    render() {

        const items = [
            { name: 'Réseau', code: require("../assets/network.png") }, { name: 'PC-Windows', code: require("../assets/windows.png") },
            { name: 'Imprimante', code: require("../assets/printer.png") }, { name: 'Internet', code: require("../assets/wifi.png") },
            { name: 'Virus', code: require("../assets/warning.png") }, { name: 'Réseau', code: require("../assets/network.png") },
           
        ];
        return (
            <View style={styles.containerWhite}>
                <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => Actions.pop()} style={{ width: '15%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require("../assets/back.png")}
                            style={{ width: 30, height: 30, }}
                            resizeMode="contain" />
                    </TouchableOpacity>
                    <View style={{ width: '70%', height: 50, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{Strings.register_text}</Text>
                    </View>

                </View>
                <ScrollView>
                    <View style={{ marginTop: 10 }}>

                        <Text style={{ padding: 15, fontSize: 14, fontWeight: 'bold' }}>
                            {Strings.new_coplete_text}
                        </Text>


                        <View style={{ margin: 20, width: '90%' }}>
                            <View style={{ width: '100%', height: 45, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.identificant_text}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>
                            <View style={{ width: '100%', height: 45, marginTop: 20, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.prenom_text}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>
                            <View style={{ width: '100%', height: 45, marginTop: 20, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.Nom_de_familee}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>
                            <View style={{ width: '100%', height: 45, borderWidth: 1, marginTop: 20, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.email_address_text}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>
                            <View style={{ width: '100%', height: 45, marginTop: 20, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput
                                    keyboardType="decimal-pad"
                                    placeholder={Strings.telephone_text}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>
                            <View style={{ width: '100%', height: 45, marginTop: 20, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.password_text}
                                    secureTextEntry={true}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>

                            <View style={{ width: '100%', height: 45, marginTop: 20, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.re_enter_pass_text}
                                    secureTextEntry={true}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>


                            <View style={{ width: '100%', height: 45, marginTop: 20, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.Addresse_text}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>
                            <View style={{ width: '100%', height: 45, marginTop: 20, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.Anniversarie_text}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>
                            <View style={{ width: '100%', height: 45, marginTop: 20, borderWidth: 1, borderColor: Strings.light_color, borderRadius: 10 }}>
                                <TextInput placeholder={Strings.Homme_text}
                                    style={{ padding: 10 }}>

                                </TextInput>
                            </View>


                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                    {Strings.Type_de_client_text}
                                </Text>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <View style={{ width: '60%', flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => this.setState({ Particulier_radio: true, Entreprise_radio: false, Clienten_radio: false })} style={{ width: '20%', height: 30, alignItems: 'center', justifyContent: 'center' }}>
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
                                        <TouchableOpacity onPress={() => this.setState({ Particulier_radio: false, Entreprise_radio: true, Clienten_radio: false })} style={{ width: '20%', height: 30, alignItems: 'center', justifyContent: 'center' }}>
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


                            <View style={{ marginTop: 30 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                    {Strings.categoty_req_text}
                                </Text>



                                <FlatGrid
                                    itemDimension={130}
                                    items={items}
                                    style={{ marginBottom: 0 }}
                                    // staticDimension={300}
                                    // fixed
                                    // spacing={20}
                                    renderItem={({ item, index }) => (
                                        <View>
                                            <View style={[{
                                                justifyContent: 'center', alignItems: 'center',
                                                borderRadius: 5,
                                                flexDirection: 'row',
                                                padding: 5,
                                                height: 100,


                                            }, { backgroundColor: 'white' }]}>

                                                <View style={{ width: '20%', height: 50, justifyContent:'center' }}>
                                                <TouchableOpacity onPress={() => this.setState({ Particulier_radio: true, Entreprise_radio: false, Clienten_radio: false })} style={{ width: '20%', height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ width: 20, height: 20, borderWidth: 2, borderRadius: 20 / 2, alignItems: 'center', justifyContent: 'center', borderColor: Strings.light_color }}>
                                                {this.state.Particulier_radio === true && (<View style={{ width: 16, height: 16, borderRadius: 16 / 2, backgroundColor: '#01A2C4', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Image source={require("../assets/right.png")}
                                                        style={{ width: 10, height: 10, }}
                                                        resizeMode="contain" />
                                                </View>)}

                                            </View>
                                        </TouchableOpacity>
                                                </View>
                                                <View style={{ width: '80%',alignItems:'center' }}>
                                                <Image source={item.code}
                                                    style={{ width: 50, height: 50, }}
                                                    resizeMode="contain" />
                                                <Text style={{ fontSize: 14 }}>{item.name}</Text>


                                                </View>
                                               
                                            </View>
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
                                        <TouchableOpacity onPress={() => this.setState({ yes_radio: true, no_radio: false})} style={{ width: '20%', height: 30, alignItems: 'center', justifyContent: 'center' }}>
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
                                        <TouchableOpacity onPress={() => this.setState({ yes_radio: false, no_radio: true})} style={{ width: '20%', height: 30, alignItems: 'center', justifyContent: 'center' }}>
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

                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                    {Strings.Ajouter_une_photo_text}
                                </Text>

                                <TouchableOpacity onPress={this.selectProfilePic} style={{ alignItems: 'center', justifyContent: 'center', width: '50%', height: 40, marginTop: 10, borderRadius: 10, backgroundColor: '#01A2C4' }}>
                                    <Text style={{ fontSize: 14, color: 'white' }}>{Strings.Prendre_votre_photo_text}</Text>

                                </TouchableOpacity>

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
                                </View> : <TouchableOpacity style={{ width: '50%', height: 40, borderRadius: 10, backgroundColor: '#01A2C4', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 16, color: 'white' }}>{Strings.Inscrire_Maintenant_text}</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
