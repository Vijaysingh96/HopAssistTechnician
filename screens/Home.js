import React from 'react';
import {
    Platform, ScrollView,
    SafeAreaView,DrawerLayoutAndroid, StatusBar, View, ImageBackground, Switch, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../styles/styles';
import Strings from '../strings/strings';
import { ECharts } from 'react-native-echarts-wrapper';
const { width, height } = Dimensions.get("window");
import { Icon, Picker, Form } from "native-base";
import OfflineRBSheet from "react-native-raw-bottom-sheet";
import NewInterventionRBSheet from "react-native-raw-bottom-sheet";
import ServiceDetaileSheet from "react-native-raw-bottom-sheet";
import AccceptRBSheet from 'react-native-raw-bottom-sheet';
import CancelRBSheet from 'react-native-raw-bottom-sheet';
import Sidebar from '../screens/SideBar'


export default class Home extends React.Component {

    constructor(props, context) {
        super(props);
        this.state = {
            switch1Value: false,
            selected: "key1",
            Att_radio: false,
            j_ai_radio: false,
            trauve_radio: false,
            fait_radio: false,
            autre_radio: false
        };
    }

    componentDidMount() {
        this.refs['DRAWER'].closeDrawer();
        // BackAndroid.exitApp();
    }
    _setDrawer() {
        this.refs['DRAWER'].openDrawer();
    }

    BarMonth = {

        xAxis: {
            type: 'category',
            data: ["4Jun", "5Jun", "6Jun", "7Jun"],
        },
        dataZoom: [{
            startValue: '0'
        }, {
            type: 'inside'
        }],
        yAxis: {
            type: 'value'
        },

        series: [{

            name: 'Forest',
            data: [0, 10, 20, 5],
            type: 'bar'
        }]
    };

    //set online offline condition in toggal switch.
    toggleSwitch1 = (value) => {

        if (value == true) {

            // Actions.push("NewIntervention")
            this.NewInterventionRBSheet.open()
            this.setState({
                switch1Value: value,
            })
            console.log('Switch 1 is: ' + value)
        } else {
            console.log('Switch 1 is: ' + value)
            this.OfflineRBSheet.open()
            this.setState({
                switch1Value: value,
            })
        }

    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }


    render() {
        var navigationView = (
            <Sidebar />
        );
        return (
            <DrawerLayoutAndroid
            drawerWidth={280}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}
            ref={'DRAWER'} >
            <View style={Styles.containerWhite}>
                <ImageBackground source={require("../assets/simble.png")}
                    style={{ width: '100%', height: 78, }}>
                    <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this._setDrawer.bind(this)} style={{ width: '15%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#01A2C4', borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
                            <Image source={require("../assets/menu.png")}
                                style={{ width: 30, height: 30, }}
                                resizeMode="contain" />
                        </TouchableOpacity>
                        <View style={{ width: '10%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require("../assets/location.png")}
                                style={{ width: 20, height: 20, }}
                                resizeMode="contain" />
                        </View>
                        <View style={{ width: '60%', height: 50, justifyContent: 'center', }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{"23, Simple Streets, Près Church gate, France"}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <ScrollView style={{ marginTop: -20 }}>
                    <View >
                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <View style={{ width: '80%' }}>
                                <Text style={{ padding: 10, fontSize: 14 }}>{Strings.online_offline_text}</Text>
                            </View>
                            <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center' }}>
                                <Switch
                                    trackColor={{ true: "Lightgreen", false: "Lightgreen" }}
                                    trackSize={{ width: 20 }}
                                    thumbColor={this.state.switch1Value ? Strings.color_green_code : Strings.color_green_code}
                                    onValueChange={this.toggleSwitch1}
                                    value={this.state.switch1Value}
                                />
                            </View>
                        </View>

                        <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10 }}>
                            {Strings.total_des_text}
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <TouchableOpacity onPress ={()=>Actions.push("WorkEstimation")} style={{ width: 100, height: 30, backgroundColor: Strings.color_green_code, borderRadius: 50, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{Strings.Mensuel_text}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 120, height: 30, backgroundColor: Strings.color_green_code, borderRadius: 50, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{Strings.Hebdomadaire_text}</Text>
                            </TouchableOpacity>
                        </View>

                        <SafeAreaView style={{ height: 400, width: "99%", marginLeft: 10, marginTop: 0, backgroundColor: 'red' }}>
                            <ECharts
                                option={this.BarMonth}
                                //option={{}}

                                ref={this.onRef}
                                onData={this.onData}
                                style={{ width: width, marginLeft: -30, paddingLeft: -10, backgroundColor: "yellow" }}>

                            </ECharts>
                        </SafeAreaView>

                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ width: '15%', alignItems: 'center', marginTop: 10 }}>
                                <Image source={require("../assets/Euro.png")}
                                    style={{ width: 50, height: 50, }}
                                    resizeMode="contain" />
                            </View>
                            <View style={{ width: '85%', flexDirection: 'column', marginBottom: 50 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10, marginTop: 0 }}>
                                    {Strings.Benefice_total}
                                </Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', paddingLeft: 10 }}>
                                    {"€ 1500.25 "}
                                </Text>
                                <Text style={{ fontSize: 16, paddingLeft: 10, marginTop: 30 }}>
                                    {Strings.selection_le_text}
                                </Text>

                                <View style={{ marginLeft: 10, width: 250, height: 50, borderRadius: 10, borderWidth: 1, marginTop: 5, marginBottom: 5, borderColor: Strings.light_color }}>
                                    <Picker
                                        mode="dropdown"
                                        iosHeader="Select your SIM"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ width: undefined }}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChange.bind(this)} >

                                        <Picker.Item label="January" value="key0" />
                                        <Picker.Item label="January" value="key1" />
                                        <Picker.Item label="January" value="key2" />
                                        <Picker.Item label="January" value="key3" />
                                        <Picker.Item label="January" value="key4" />
                                    </Picker>
                                </View>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', paddingLeft: 10, }}>
                                    € 200.25 </Text>
                            </View>
                        </View>

                        <OfflineRBSheet
                            ref={ref => { this.OfflineRBSheet = ref; }}
                            height={500}
                            duration={300}
                            closeOnPressMask={false}
                            customStyles={{
                                container: {
                                    alignItems: "center",
                                    borderRadius: 10,
                                    backgroundColor: 'transparent'
                                }
                            }}>
                            <View style={{ flexDirection: 'column', width: '100%', height: '100%', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <ImageBackground source={require("../assets/Box.png")}
                                    style={{ width: 300, height: 300,  borderRadius : 50,}}
                                    resizeMode="contain">

                               
                                <View style={{ width: '100%', height: 400, borderRadius: 10, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, padding: 10, textAlign: 'center' }}>{Strings.e_export_text}</Text>
                               
                                   
                                    <Text style={{ fontSize: 14, marginTop: 20, padding: 10, }}>{Strings.etrs_vous_text}</Text>

                                    <View style={{ width: '90%', flexDirection: 'row' ,marginTop:30}}>
                                        <View style={{ width: '50%', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => this.OfflineRBSheet.close()} style={{ width: '95%', height: 40, backgroundColor: Strings.color_green_code, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{Strings.return_text}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ width: '50%', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => this.OfflineRBSheet.close()} style={{ width: '90%', height: 40, borderColor: Strings.color_green_code, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
                                                <Text style={{ fontSize: 16, color: Strings.color_green_code, fontWeight: 'bold' }}>{Strings.confirm_text}</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>

                                </View>
                                </ImageBackground>
                                </View>
                        </OfflineRBSheet>

                        <NewInterventionRBSheet
                            ref={ref => { this.NewInterventionRBSheet = ref; }}
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
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, padding: 10, textAlign: 'center' }}>{Strings.newIntervention_text}</Text>
                                   

                                    <Text style={{ fontSize: 14, marginTop: 20, padding: 10, }}>{Strings.new_intervention_string_text}</Text>

                                    <View style={{ width: '100%', flexDirection: 'row' }}>
                                        <View style={{ width: '50%', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => this.NewInterventionRBSheet.close()} style={{ width: '95%', height: 40, backgroundColor: 'red', borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{Strings.Verifier_Maintenant_text}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ width: '50%', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => this.NewInterventionRBSheet.close() + this.ServiceDetaileSheet.open()} style={{ width: '90%', height: 40, backgroundColor: Strings.color_green_code, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', }}>
                                                <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>{Strings.Verifier_plus_tard_text}</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>

                                </View>
                                </ImageBackground>
                            </View>
                        </NewInterventionRBSheet>

                        <ServiceDetaileSheet
                            ref={ref => { this.ServiceDetaileSheet = ref; }}
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
                            <ImageBackground source={require("../assets/Box(1).png")}
                                    style={{ width: 350, height: 430,  borderRadius : 50,alignItems:'center'}}
                                   resizeMode='stretch'>
                                <View style={{ width: '80%', height: 400, borderRadius: 10, alignItems: 'center',marginTop:20 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10, padding: 10, textAlign: 'center' }}>{Strings.Details_du_service_text}</Text>
                                

                                    <View style={{ width: '100%', flexDirection: 'row', height: 40 ,marginTop:30}}>
                                        <View style={{ width: '15%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require("../assets/location.png")}
                                                style={{ width: 20, height: 20 }}
                                                resizeMode="contain" />
                                        </View>
                                        <View style={{ width: '85%', justifyContent: 'center' }}>
                                            <Text>10 cite d Angouleme 75011 paris france</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', height: 40 }}>
                                        <View style={{ width: '15%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require("../assets/clock.png")}
                                                style={{ width: 20, height: 20 }}
                                                resizeMode="contain" />
                                        </View>
                                        <View style={{ width: '85%', justifyContent: 'center' }}>
                                            <Text>6:00 pm - 7:00 pm</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', height: 40 }}>
                                        <View style={{ width: '15%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require("../assets/calender.png")}
                                                style={{ width: 20, height: 20 }}
                                                resizeMode="contain" />
                                        </View>
                                        <View style={{ width: '85%', justifyContent: 'center' }}>
                                            <Text>15/01/2020</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', height: 40 }}>
                                        <View style={{ width: '15%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require("../assets/filter.png")}
                                                style={{ width: 20, height: 20 }}
                                                resizeMode="contain" />
                                        </View>
                                        <View style={{ width: '85%', justifyContent: 'center' }}>
                                            <Text>Panne de affichage</Text>
                                        </View>
                                    </View>

                                    <View style={{ width: '100%', flexDirection: 'row', height: 40 }}>
                                        <View style={{ width: '15%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require("../assets/user-2.png")}
                                                style={{ width: 20, height: 20 }}
                                                resizeMode="contain" />
                                        </View>
                                        <View style={{ width: '85%', justifyContent: 'center' }}>
                                            <Text>Particulier</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row' }}>
                                        <View style={{ width: '50%', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => this.ServiceDetaileSheet.close() + this.AccceptRBSheet.open()} style={{ width: '95%', height: 40, backgroundColor: Strings.color_green_code, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{Strings.accepter_text}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ width: '50%', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => this.ServiceDetaileSheet.close()} style={{ width: '90%', height: 40, backgroundColor: 'red', borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', }}>
                                                <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>{Strings.Supprimer_text}</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>

                                </View>
                                </ImageBackground>
                            </View>
                        </ServiceDetaileSheet>


                        <AccceptRBSheet
                            ref={ref => { this.AccceptRBSheet = ref; }}
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
                               
                            <ImageBackground source={require("../assets/Box(1).png")}
                                    style={{ width: 350, height: 500,  borderRadius : 50,alignItems:'center'}}
                                   resizeMode='stretch'>
                                <View style={{ width: '85%', height: 470, borderRadius: 10, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, padding: 10, textAlign: 'center' }}>{Strings.Commande_acceptée_text}</Text>
                                 

                                    <Text style={{ fontSize: 16,  textAlign: 'center' }}>{Strings.Felications_text}</Text>
                                    <Text style={{ fontSize: 14, textAlign: 'center', padding: 5,marginTop:20 }}>{Strings.vous_etes_text}</Text>


                                    <View style={{ width: '100%', flexDirection: 'row', height: 40 }}>
                                        <View style={{ width: '50%', height: '100%', justifyContent: 'center' }}>

                                            <Text style={{ paddingLeft: 5, color: Strings.color_green_code }}>{Strings.Intervention_prevue_à_text}</Text>
                                        </View>
                                        <View style={{ width: '50%', justifyContent: 'center' }}>
                                            <Text style={{ paddingLeft: 5 }}>{"17h36 {05/08/2019}"}</Text>
                                        </View>
                                    </View>

                                    <View style={{ width: '100%', flexDirection: 'row', height: 40 }}>
                                        <View style={{ width: '50%', height: '100%', justifyContent: 'center' }}>

                                            <Text style={{ paddingLeft: 5, color: Strings.color_green_code }}>{Strings.Problème_rencontré_text}</Text>
                                        </View>
                                        <View style={{ width: '50%', justifyContent: 'center' }}>
                                            <Text style={{ paddingLeft: 5 }}>{"Test"}</Text>
                                        </View>
                                    </View>

                                    <View style={{ width: '100%', flexDirection: 'row', height: 40 }}>
                                        <View style={{ width: '50%', height: '100%', justifyContent: 'center' }}>

                                            <Text style={{ paddingLeft: 5, color: Strings.color_green_code }}>{Strings.Numero_de_la_text}</Text>
                                        </View>
                                        <View style={{ width: '50%', justifyContent: 'center' }}>
                                            <Text style={{ paddingLeft: 5 }}>{"19072401"}</Text>
                                        </View>
                                    </View>

                                    <View style={{ width: '100%', flexDirection: 'row', height: 40 }}>
                                        <View style={{ width: '50%', height: '100%', justifyContent: 'center' }}>

                                            <Text style={{ paddingLeft: 5, color: Strings.color_green_code }}>{Strings.Lieu_text}</Text>
                                        </View>
                                        <View style={{ width: '50%', justifyContent: 'center' }}>
                                            <Text style={{ paddingLeft: 5 }}>{"110 cite d Angouleme75011 paris, France"}</Text>
                                        </View>
                                    </View>


                                    <Text style={{ fontSize: 14, textAlign: 'center', padding: 5, marginTop: 10 }}>{Strings.Veuillez_text}</Text>




                                    <View style={{ width: '100%', flexDirection: 'row' }}>
                                        <View style={{ width: '60%', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => this.AccceptRBSheet.close() + this.CancelRBSheet.open()} style={{ width: '95%', height: 40, backgroundColor: 'red', borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{Strings.Annuler_la_Commande_text}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ width: '40%', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => this.AccceptRBSheet.close()} style={{ width: '90%', height: 40, backgroundColor: Strings.color_green_code, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', }}>
                                                <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>{Strings.next_text}</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>

                                </View>
                                </ImageBackground>
                            </View>
                        </AccceptRBSheet>

                        <CancelRBSheet
                            ref={ref => { this.CancelRBSheet = ref; }}
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
                            <ImageBackground source={require("../assets/Box(1).png")}
                                    style={{ width: 350, height: 450,  borderRadius : 50,alignItems:'center'}}
                                   resizeMode='stretch'>
                                <View style={{ width: '90%', height: 420,  borderRadius: 10, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30, padding: 10, textAlign: 'center' }}>{Strings.Annuler_la_Commande_text}</Text>
                                    
                                    <View style={{ width: '100%', marginTop: 20, }}>
                                        <Text style={{ fontSize: 16, padding: 10, }}>{Strings.pourquoi_text}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity onPress={() => this.setState({ Att_radio: true, j_ai_radio: false, trauve_radio: false, fait_radio: false, autre_radio: false })} style={{ width: '15%', height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={{ width: 20, height: 20, borderWidth: 1, borderRadius: 20 / 2, alignItems: 'center', justifyContent: 'center', borderColor: '#01A2C4' }}>
                                                    {this.state.Att_radio === true && (<View style={{ width: 16, height: 16, borderRadius: 16 / 2, backgroundColor: '#01A2C4', alignItems: 'center', justifyContent: 'center' }}>
                                                        <Image source={require("../assets/right.png")}
                                                            style={{ width: 10, height: 10, }}
                                                            resizeMode="contain" />
                                                    </View>)}
                                                </View>
                                            </TouchableOpacity>
                                            <View style={{ width: '85%', height: 40, justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 14 }}>{Strings.l_est_pas_text}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <TouchableOpacity onPress={() => this.setState({ Att_radio: false, j_ai_radio: true, trauve_radio: false, fait_radio: false, autre_radio: false })} style={{ width: '15%', height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={{ width: 20, height: 20, borderWidth: 1, borderRadius: 20 / 2, alignItems: 'center', justifyContent: 'center', borderColor: '#01A2C4' }}>
                                                    {this.state.j_ai_radio === true && (<View style={{ width: 16, height: 16, borderRadius: 16 / 2, backgroundColor: '#01A2C4', alignItems: 'center', justifyContent: 'center' }}>
                                                        <Image source={require("../assets/right.png")}
                                                            style={{ width: 10, height: 10, }}
                                                            resizeMode="contain" />
                                                    </View>)}
                                                </View>
                                            </TouchableOpacity>
                                            <View style={{ width: '85%', height: 40, justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 14 }}>{Strings.l_reserve_text}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <TouchableOpacity onPress={() => this.setState({ Att_radio: false, j_ai_radio: false, trauve_radio: true, fait_radio: false, autre_radio: false })} style={{ width: '15%', height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={{ width: 20, height: 20, borderWidth: 1, borderRadius: 20 / 2, alignItems: 'center', justifyContent: 'center', borderColor: '#01A2C4' }}>
                                                    {this.state.trauve_radio === true && (<View style={{ width: 16, height: 16, borderRadius: 16 / 2, backgroundColor: '#01A2C4', alignItems: 'center', justifyContent: 'center' }}>
                                                        <Image source={require("../assets/right.png")}
                                                            style={{ width: 10, height: 10, }}
                                                            resizeMode="contain" />
                                                    </View>)}
                                                </View>
                                            </TouchableOpacity>
                                            <View style={{ width: '85%', height: 40, justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 14 }}>{Strings.l_payer_text}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <TouchableOpacity onPress={() => this.setState({ Att_radio: false, j_ai_radio: false, trauve_radio: false, fait_radio: true, autre_radio: false })} style={{ width: '15%', height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={{ width: 20, height: 20, borderWidth: 1, borderRadius: 20 / 2, alignItems: 'center', justifyContent: 'center', borderColor: '#01A2C4' }}>
                                                    {this.state.fait_radio === true && (<View style={{ width: 16, height: 16, borderRadius: 16 / 2, backgroundColor: '#01A2C4', alignItems: 'center', justifyContent: 'center' }}>
                                                        <Image source={require("../assets/right.png")}
                                                            style={{ width: 10, height: 10, }}
                                                            resizeMode="contain" />
                                                    </View>)}
                                                </View>
                                            </TouchableOpacity>
                                            <View style={{ width: '85%', height: 40, justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 14 }}>{Strings.Contretemps_text}</Text>
                                            </View>
                                        </View>

                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row' }}>
                                        <View style={{ width: '60%', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => this.CancelRBSheet.close()} style={{ width: '95%', height: 40, backgroundColor: 'red', borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ color: 'white' }}>{Strings.Annuler_la_Commande_text}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ width: '40%', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => this.CancelRBSheet.close()} style={{ width: '90%', height: 40, backgroundColor: Strings.color_green_code, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 16, color: 'white' }}>{Strings.next_text}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                </ImageBackground>
                            </View>
                        </CancelRBSheet>


                    </View>
                </ScrollView>
            </View>
            </DrawerLayoutAndroid>
        );
    }
}








