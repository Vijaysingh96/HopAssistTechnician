import React from 'react';
import { StatusBar, Button, FlatList, ScrollView, PixelRatio, TextInput, View, ImageBackground, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from "../styles/styles";
import Strings from '../strings/strings'
import ImagePicker from 'react-native-image-picker';
import { Tab, Tabs } from 'native-base';
import UpComming  from '../screens/upComing'
import HistoryTabs from '../screens/historyTab'
export default class historys extends React.Component {
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
                    <View style={{ width: '85%', height: 50, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{Strings.Historiques_text}</Text>
                    </View>
                </View>
                {/* <ScrollView> */}
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                    <View>
                        <Tabs tabBarUnderlineStyle={{ backgroundColor: Strings.color_green_code }}>
                            <Tab heading={Strings.a_venir} tabStyle={{ backgroundColor: 'white' }}
                                textStyle={{ color: 'black',fontWeight:'bold' }} activeTabStyle={{ backgroundColor: 'white' }}
                                activeTextStyle={{ color:Strings.color_green_code, fontWeight: 'bold' }}>
                                <UpComming />
                            </Tab>
                            <Tab heading={Strings.Histoire_text} tabStyle={{ backgroundColor: 'white' }}
                                textStyle={{ color: 'black',fontWeight:'bold' }} activeTabStyle={{ backgroundColor: 'white' }}
                                activeTextStyle={{ color:Strings.color_green_code, fontWeight: 'bold' }}>
                                <HistoryTabs />
                            </Tab>
                        </Tabs>
                    </View>
                    </View>
                {/* </ScrollView> */}
            </View>
        );
    }
}
