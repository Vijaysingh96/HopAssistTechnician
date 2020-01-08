import React from 'react';
import {
    Platform, TextInput,
    SafeAreaView, StatusBar, ScrollView, View, ImageBackground, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../styles/styles';
import Strings from '../strings/strings';
import { Icon, Picker, Form } from "native-base";
import RequestacceptedRBSheet from "react-native-raw-bottom-sheet";
import DestinationReachedRBSheet from "react-native-raw-bottom-sheet";


export default class WorkEstimation extends React.Component {

    constructor(props, context) {
        super(props);
        this.state = {
            selected: "[€]29"
        };
    }

    onValueChange(value, label) {
        this.setState({
            selected: value
        });
    }
    render() {
        return (
            <View style={Styles.containerWhite}>
                <ImageBackground source={require("../assets/simble.png")}
                    style={{ width: '100%', height: 78, }}>
                    <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={()=> Actions.pop()} style={{ width: '15%', height: 50, justifyContent: 'center', alignItems: 'center', }}>
                            <Image source={require("../assets/back.png")}
                                style={{ width: 25, height: 25, }}
                                resizeMode="contain" />
                        </TouchableOpacity>
                        <View style={{ width: '80%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{Strings.Estimation_text}</Text>

                        </View>

                    </View>
                </ImageBackground>
                <ScrollView style={{ marginTop: -20 }}>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10 }}>{Strings.Estimation_text}</Text>
                        <Text style={{ fontSize: 14, padding: 10 }}>{Strings.veuillez_creer_text}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10, marginTop: 20 }}>{Strings.frais_de_text}</Text>
                        <View style={{ width: '100%' }}>
                            <ImageBackground source={require("../assets/box-2(1).png")}
                                style={{ height: 80, width: '100%', alignItems: 'center' }}
                                resizeMode="stretch" >
                                <View style={{ width: '90%', height: 80, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <View style={{ flexDirection: 'row', width: 80 }}>
                                        <Text style={{ marginTop: 10, paddingLeft: 5 }}>{this.state.selected}</Text>
                                        <Picker
                                            mode="dropdown"
                                            iosHeader="Select your SIM"
                                            iosIcon={<Icon name="arrow-down" />}
                                            style={{ width: 0, marginTop: -5 }}
                                            selectedValue={this.state.selected}
                                            onValueChange={this.onValueChange.bind(this)} >

                                            <Picker.Item label="[€]29" value="[€]29" />
                                            <Picker.Item label="[€]28" value="[€]28" />
                                            <Picker.Item label="[€]28" value="[€]28" />
                                            <Picker.Item label="[€]83" value="[€]83" />
                                            <Picker.Item label="[€]28" value="[€]28" />
                                        </Picker>
                                    </View>


                                </View>


                            </ImageBackground>
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10, marginTop: 20 }}>{Strings.devis_text}</Text>
                        <View style={{ width: '100%' }}>
                            <ImageBackground source={require("../assets/box-2(1).png")}
                                style={{ height: 80, width: '100%', alignItems: 'center' }}
                                resizeMode="stretch" >
                                <View style={{ width: '90%', height: 80, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <View style={{ flexDirection: 'row', width: 80 }}>
                                        <Text style={{ marginTop: 10, paddingLeft: 5 }}>{this.state.selected}</Text>
                                        <Picker
                                            mode="dropdown"
                                            iosHeader="Select your SIM"
                                            iosIcon={<Icon name="arrow-down" />}
                                            style={{ width: 0, marginTop: -5 }}
                                            selectedValue={this.state.selected}
                                            onValueChange={this.onValueChange.bind(this)} >

                                            <Picker.Item label="[€]29" value="[€]29" />
                                            <Picker.Item label="[€]28" value="[€]28" />
                                            <Picker.Item label="[€]28" value="[€]28" />
                                            <Picker.Item label="[€]83" value="[€]83" />
                                            <Picker.Item label="[€]28" value="[€]28" />
                                        </Picker>
                                    </View>


                                </View>


                            </ImageBackground>
                        </View>

                        <View style={{ marginTop: 10 }}>

                            <View style={{ width: '100%' }}>
                                <ImageBackground source={require("../assets/box-3(1).png")}
                                    style={{ height: 100, width: '100%', justifyContent: 'center', alignItems: 'center' }}
                                    resizeMode="stretch" >
                                    <View style={{ width: '90%', height: 60, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>

                                        <View style={{ width: '50%', height: 20, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 14 }}>Temps</Text>
                                        </View>
                                        <View style={{ width: '50%', flexDirection: 'column', marginLeft: 10 }}>
                                            <Text style={{ fontSize: 14 }}>heure/emploi</Text>
                                            <Image source={require("../assets/clock.png")}
                                                style={{ height: 20, width: 20, justifyContent: 'center', alignItems: 'center' }}
                                                resizeMode="stretch" />
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View >

                            <View style={{ width: '100%', flexDirection: 'row' }}>
                                <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text>Cout</Text>
                                </View>
                                <View style={{ width: '50%',}}>
                                <Text>[€] 45</Text>
                                </View>     
                            </View>
                            <View style={{ width: '100%' }}>
                                <ImageBackground source={require("../assets/box-3(1).png")}
                                    style={{ height: 100, width: '100%', justifyContent: 'center', alignItems: 'center' }}
                                    resizeMode="stretch" >
                                    <View style={{ width: '90%', height: 60, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>

                                        <View style={{ width: '50%', height: 20, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 14 }}>Cout du materials</Text>
                                        </View>
                                        <View style={{ width: '50%', flexDirection: 'column', marginLeft: 10 }}>
                                            <Text style={{ fontSize: 14 }}>Cout du materials [€]</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 14, color: Strings.color_green_code }}>[€]</Text>
                                                <TextInput placeholder="votre cout materiel">

                                                </TextInput>
                                            </View>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>


                            <View style={{ width: '100%', flexDirection: 'row',marginBottom:50 }}>
                            <View style={{ width: '60%', alignItems: 'center' }}>
                                            <TouchableOpacity  style={{ width: '95%', height: 40, backgroundColor: 'red', borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ color: 'white' }}>{Strings.Annuler_la_Commande_text}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ width: '40%', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => this.RequestacceptedRBSheet.open()}  style={{ width: '90%', height: 40, backgroundColor: Strings.color_green_code, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 16, color: 'white' }}>{Strings.Soumettre_text}</Text>
                                            </TouchableOpacity>
                                        </View>    
                            </View>


                        </View>

                        <RequestacceptedRBSheet
                            ref={ref => { this.RequestacceptedRBSheet = ref; }}
                            height={500}
                            duration={200}
                            closeOnPressMask={false}
                            customStyles={{
                                container: {
                                    alignItems: "center",
                                    borderRadius: 10,
                                    // backgroundColor: 'rgba(52, 52, 52, 0.8)'  
                                    backgroundColor: 'transparent'
                                }
                            }}>
                            <View style={{ flexDirection: 'column', width: '90%', height: '100%', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <ImageBackground source={require("../assets/Box.png")}
                                    style={{ width: 360, height: 400,  borderRadius : 50,alignItems:'center'}}
                                    resizeMode="contain">
                                <View style={{ width: 320, height: 320,  borderRadius: 10, alignItems: 'center' ,marginTop:30}}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, padding: 10, textAlign: 'center' }}>{Strings.Requête_acceptée}</Text>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30, padding: 10, textAlign: 'center' }}>{Strings.Hey_Hardley_Peter_text}</Text>
                                    <Text style={{ fontSize: 14}}>{Strings.Votre_estimation_text}</Text>
                                    <Text style={{ fontSize: 14,  padding: 10, }}>{Strings.accept_john_text}</Text>
                                        <View style={{ width: '100%', alignItems: 'center' , marginTop: 10}}>
                                            <TouchableOpacity onPress={() => this.RequestacceptedRBSheet.close()+this.DestinationReachedRBSheet.open()} style={{ width: '90%', height: 40, backgroundColor: Strings.color_green_code, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', }}>
                                                <Text style={{ fontSize: 14, color: 'white', fontWeight: 'bold' }}>{Strings.Commencez_text}</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                                </ImageBackground>
                            </View>
                        </RequestacceptedRBSheet>
                        
                        <DestinationReachedRBSheet
                            ref={ref => { this.DestinationReachedRBSheet = ref; }}
                            height={500}
                            duration={200}
                            closeOnPressMask={false}
                            customStyles={{
                                container: {
                                    alignItems: "center",
                                    borderRadius: 10,
                                    // backgroundColor: 'rgba(52, 52, 52, 0.8)'  
                                    backgroundColor: 'transparent'
                                }
                            }}>
                            <View style={{ flexDirection: 'column', width: '90%', height: '100%', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <ImageBackground source={require("../assets/Box.png")}
                                    style={{ width: 300, height: 300,  borderRadius : 50,alignItems:'center'}}
                                    resizeMode="contain">
                                <View style={{ width: 300, height: 300,  borderRadius: 10, alignItems: 'center' ,marginTop:30}}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 0, padding: 10, textAlign: 'center' }}>{Strings.Destination_text}</Text>
                                    <Text style={{ fontSize: 18, marginTop: 30, padding: 10, textAlign: 'center' }}>{Strings.Vous_êtes_arrivé_text}</Text>
                                  
                                        <View style={{ width: '100%', alignItems: 'center' , marginTop: 10}}>
                                            <TouchableOpacity onPress={() => this.DestinationReachedRBSheet.close()} style={{ width: '90%', height: 40, backgroundColor: Strings.color_green_code, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', }}>
                                                <Text style={{ fontSize: 14, color: 'white', fontWeight: 'bold' }}>{Strings.Cliquez_text}</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                                </ImageBackground>
                            </View>
                        </DestinationReachedRBSheet>
                    </View>
                </ScrollView>
            </View>
        );
    }
}








