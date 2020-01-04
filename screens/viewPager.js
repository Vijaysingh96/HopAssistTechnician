import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';
import { IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'react-native-best-viewpager'
import Strings from '../strings/strings'
import { Actions } from 'react-native-router-flux';



export default class ViewPagerPage extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        text: "hello H r u",
        text2: "hello H r u",
        text3: "hello H r u",
        positionn: 0
      }

    }
  }
  _onPressButton = () => {
    if (this.state.positionn == 0) {
    }
    else {
      let pos = this.state.positionn;
      console.log('position::####::::' + pos);
      console.log('position::::$$$::' + this.state.postistio);
      let new_pos = pos - 1;
      console.log('position number', new_pos);
      this.setState({ positionn: new_pos })
      console.log('position state', this.state.positionn);
      this.viewPager.setPage(new_pos);

    }



  }

  _onPressButton2 = () => {
    console.log('position add::***::::' + this.state.positionn);

    if (this.state.positionn == 2) {

    }
    else {


      this.props.navigation.navigate('Login');

    }


  }
  _onPressButton3 = () => {

    console.log('position::!!!::::' + this.state.positionn);


    if (this.state.positionn == 2) {
      this.props.navigation.navigate('Login');

    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <IndicatorViewPager
          style={{ height: '100%', }}
          ref={viewPager => {
            this.viewPager = viewPager
          }}
          onPageSelected={(position) => {
            console.log("sseltce:::::::" + position.position),
              this.setState({ positionn: position.position })
            if (position.position == 2) {
              console.log("sseltce%%%%%" + position.position),
                this.props.navigation.navigate('Login');
            }
          }
          }
          indicator={this._renderDotIndicator()}>
          <View >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require("../assets/img1.png")}
                style={{ width: 300, height: 300, }}
                resizeMode="contain">
              </Image>
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>
                  {Strings.Reparer_devient_facile_Text}
                </Text>
              </View>
              <Text style={{ fontSize: 16, color: 'black', padding: 10 }}>
                {Strings.Lorem_Ipsum_text}
              </Text>
            </View>
          </View>
          <View >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require("../assets/img2.png")}
                style={{ width: 300, height: 300, }}
                resizeMode="contain">
              </Image>
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>
                  {Strings.now_save_text}
                </Text>
              </View>
              <Text style={{ fontSize: 16, color: 'black', padding: 10 }}>
                {Strings.Lorem_Ipsum_text}
              </Text>
            </View>

          </View>

        </IndicatorViewPager>
        <View style={{ marginTop: -40, height: 40, alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={() => Actions.push("SignUp")} style={{ width: 100, height: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#01A2C4' }}>{Strings.skipText}</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }

  _renderTitleIndicator() {
    return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
  }

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={2} style={{ height: 40, width: 150 }}
      dotStyle={{ borderColor: "#01A2C4", height: 15, width: 15, borderRadius: 15 / 2, borderWidth: 1 }}
      selectedDotStyle={{ backgroundColor: "#01A2C4", height: 10, width: 40, borderRadius: 10 }}>

    </PagerDotIndicator>;
  }



}