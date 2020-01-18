import React from 'react';
import { StatusBar, Button, FlatList, ScrollView, PixelRatio, TextInput, View, ImageBackground, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from "../styles/styles";
import Strings from '../strings/strings'
import { Card } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
let drop_down_data = [{
    value: 'Banana',
}, {
    value: 'Mango',
}, {
    value: 'Pear',
}];;


export default class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ name: 'John Simth', rating: 'a accepté votre demande' }, { name: 'John Simth', rating: 'L\'expert Hardley peter est arrivé ' },]
        };

    }

    valueExtractor = val => {
        console.log("vehicle id::::****:::" + JSON.stringify(val.value));
    };
    onChangeTextPress(value) {
        console.log("vehicle id::::****:::" + value);

        // this.state.selected[key] = value;
        this.setState({
            selected: value,
            selectederror: '',
            data: [{ name: 'John Simth', rating: 'a accepté votre demande' }, { name: 'John Simth', rating: 'L\'expert Hardley peter est arrivé ' },]


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
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Categorie</Text>

                        </View>

                    </View>
                </ImageBackground>
                <ScrollView style={{ marginTop: -20 }}>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', margin: 10, width: '95%' }}>
                            <Image source={require('../assets/Group9690.png')}
                                style={{ width: 20, height: 20 }} >

                            </Image>
                            <Text style={{ paddingLeft: 10 }}>{Strings.note_text}</Text>
                        </View>

                        <View
                            style={{
                                marginTop: 20, width: "90%", height: 50, borderRadius: 10, borderWidth: 1, borderColor: Strings.light_color
                            }}>
                            <Dropdown

                                containerStyle={{
                                    flex: 1,
                                    paddingLeft: 10,
                                    height: 10,
                                    marginTop: -20,
                                }}
                                dropdownMargins={{ min: 18, max: 16 }}
                                //label={Strings.select_cat}
                                lineWidth={0}
                                value={Strings.select_cat}
                                data={drop_down_data}
                                rippleCentered={true}
                                valueExtractor={({ value }) => value}
                                onChangeText={(value) => { this.onChangeTextPress(value) }} />
                        </View>
                        <View style={{ width: '90%' }}>
                            <FlatList
                                keyExtractor={item => item.id}
                                data={this.state.data}
                                renderItem={({ item }) => (
                                    <Card style={{ width: '99%', height: 60, marginTop: 30, flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row', width: '45%', height: '100%', alignItems: 'center', }}>
                                            <Image source={require('../assets/apple(1).png')}
                                                style={{ width: 40, height: 40, marginLeft: 5 }} >
                                            </Image>
                                            <Text style={{ paddingLeft: 10 }}>Mac</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', width: '40%', height: '100%', alignItems: 'center', }}>
                                            <Card style={{ width: '100%', height: 40, borderRadius: 10, }}>
                                                <TextInput style={{ paddingLeft: 10 }} placeholder="Cout/heure  [€]"></TextInput>
                                            </Card>
                                        </View>
                                        <TouchableOpacity style={{ flexDirection: 'row', width: '15%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('../assets/close-button.png')}
                                                style={{ width: 15, height: 15, }} >
                                            </Image>
                                        </TouchableOpacity>
                                    </Card>
                                )}
                            />
                        </View>
                        <TouchableOpacity style={{ width: '50%', height: 40, backgroundColor: Strings.color_green_code, borderRadius: 50, marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: 'white', fontWeight: 'bold' }}>Mattre A Jour</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
