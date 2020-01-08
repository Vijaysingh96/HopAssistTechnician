import React from 'react';
import { StatusBar, Button, FlatList, ScrollView, PixelRatio, TextInput, View, ImageBackground, Text, Image, Dimensions, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from "../styles/styles";
import Strings from '../strings/strings'
import ImagePicker from 'react-native-image-picker';
import Loading from 'react-native-whc-loading';

export default class upComming extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        this.refs.loading2.show();
        setTimeout(() => {
            this.refs.loading2.close();
        }, 2000);
    }


    render() {
        return (

            <View style={styles.containerWhite}>
                 {/* <BubblesLoader
                             size={40} /> */}

                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', height: 500 }}>
                  
                  
                  
                    <Loading
                        ref={"loading2"}
                        image={require("../assets/spinner-of-dots.png")}
                        // backgroundColor='transparent'
                        backgroundColor='white'
                        borderRadius={5}
                        size={100}
                        imageSize={80}
                        indicatorColor='gray'
                        easing={Loading.EasingType.ease} />

                        
                </View>

            
            </View>
        );
    }
}


// {/* <View style={{ marginTop: 200 }} >
//                         {/* <CirclesLoader /> */}
//                         <BubblesLoader
//                             size={40} />

//                         {/* <ColorDotsLoader></ColorDotsLoader>
           
//                         <TextLoader text="Loading" /> */}
//                     </View> */}