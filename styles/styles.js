import React, { Component } from 'react';
var ReactNative = require('react-native');
import {
  View,
  Text,
  Animated,StatusBar,Image,
  StyleSheet,Dimensions,Platform,AsyncStorage
} from 'react-native';
const { width, height } = Dimensions.get("window");

import  Colors from "../color/colors";
import { placeholder } from '@babel/types';

export default {
  containerWhite: {
  flex: 1,
    backgroundColor:'white',
    flexDirection:'column',
  },
 
  containerBlue:{
    flex:1,
    backgroundColor:'blue'
  },
  headerWhite:{
   
    width: width,height: 50, backgroundColor:'white', flexDirection: 'row', shadowColor: '#000',shadowOffset: { width: 5, height: 4 },shadowOpacity: 2,shadowRadius: 2,elevation: 15, alignItems: 'center'
  },
  
  selectExamView:{
    width: width / 4-10,height:45,borderWidth:0.5,marginLeft:7,justifyContent:'center',marginTop:10,alignItems:'center',  borderWidth: 1,padding: 2,  margin: 2, shadowOffset: { width: 2, height: 5 },shadowOpacity: 0.5,shadowRadius: 1,elevation: 1,backgroundColor: "#ffffff",borderColor:'#757575'
  },
  headerWithTab:{
    width: width,height: 50, backgroundColor:Colors.COLOR.lightRed, flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center' 
  },
  headerSignText: {
    fontSize: 18, color:'white', textAlign: "center"
    },
  headerBackImg:{
    width: 22, height: 22, marginLeft: 10
   
  },

  headerRgtWidthView:{
    width: 25, marginRight: 10
  },
 splashContainer: {
  flex: 1,flexDirection: 'column',justifyContent: 'space-between', alignItems: 'center' , backgroundColor: Colors.COLOR.whiteColor},
 splashLogo: {
    width:160,height:80,alignItems: 'center',justifyContent: 'center'
 },
 introSliderLogo: {
  width:width,height:width/3,alignItems: 'center',justifyContent: 'center',
},
introFBloginImg: {
   width: 20,height:20, marginLeft: 10
 },
 popupDialogGif:{
  width:99,height:99
 },
 popupDialogSt:{
  alignItems: 'center',justifyContent: 'center',marginTop:-15
 },
 popupTextSty:{
  color:'#505050',fontSize:14,marginTop:20
 },
 popViewSty:{
   justifyContent:'center',alignItems:'center',marginTop:20
 },
 popStyTextVie:{
  backgroundColor:Colors.COLOR.lightRed,width:width/3,height:width/8,justifyContent:'center',alignItems:'center'
 },
 popStyText:{
  color:Colors.COLOR.whiteColor,fontSize:15
 },
 introSliderImg: {
  width: width,
  height: height-120,
  backgroundColor: 'transparent',
  position: 'absolute'
},
introSliderFbImg: {
  width: 20,height: 20, marginRight: 10
},
IntroSlide: {
  width:width,height:height/2.0, marginTop: 10
},
introFBLoginView: {
  backgroundColor: Colors.COLOR.lightRed,
marginTop: 20,
marginLeft: 10,
  height: 50,
  alignItems: 'center',
  justifyContent:'center',
  flexDirection: 'row',
        width:width/2.2,
        borderRadius:8,
},
introGoogleLoginView: {
  backgroundColor: '#ea2717',
marginTop: 20,
marginLeft: 10,
  height: 50,
  alignItems: 'center',
  justifyContent:'center',
flexDirection: 'row',
        width:width/2.2,
        borderRadius:8,


},
introSignUpLoginView: {
  backgroundColor: '#F1EDED',
marginTop: 20,
marginLeft: 10,
  height: 55,
  alignItems: 'center',
  justifyContent:'center',

        width:width/2.2,
        borderRadius:8,


},
submitButtonText:{
   fontSize: 16,
   textAlign: 'center',
   width:200,
   color: Colors.COLOR.whiteColor
},
facebookLoginView: {
  backgroundColor: Colors.COLOR.lightRed,
  padding: 10,
  margin: 15,
  height: 50,
  alignItems: 'center',
        width:width/2.3,
        flexDirection: 'row',
        borderRadius: 8
},
createNewAccText: {
  color: 'red', fontSize: 18, textAlign: 'center'
},

facebookButtonText:{
  color: Colors.COLOR.whiteColor
},
googleLoginView: {
  backgroundColor: '#ea2717',
  padding: 10,
  marginLeft: 5,
  margin: 15,
  height: 50,
  alignItems: 'center',
        width:width/2.3,
        flexDirection: 'row',
        borderRadius: 8


},
googleButtonText:{
  color: Colors.COLOR.whiteColor
},
introLoginView: {
  borderColor:'orange',
  backgroundColor: '#F6F3EE',
  height: 55,
        width:width/2.0,
        flexDirection: 'row',

},


inputContainer: {
  borderColor: '#00000',
  borderBottomColor: '#F5FCFF',
  backgroundColor: '#FFFFFF',
  borderRadius:8,
  borderWidth: 1,
  width:width/1.2,
  height:45,
  marginBottom:20,
  flexDirection: 'row',
  alignItems:'center'
},
input: {
height:45,
marginLeft:16,
borderBottomColor: '#FFFFFF',
},
submitButton: {
  marginTop: 20,
 justifyContent: 'center',
backgroundColor:Colors.COLOR.lightRed,
height: 40,
     width:width-40,
     borderRadius:0
},

loginFBButton: {
  marginTop: 20,

  backgroundColor: '#4267B2',
  height: 40,
  alignItems: 'center',
       width: 150,
       borderRadius:8,
  flexDirection: 'row', 
  
  },
  
  loginGmailButton: {
    marginTop: 20,
    backgroundColor: '#980012',
    height: 40,
    alignItems: 'center',
         width: 150,
         borderRadius:8,
    flexDirection: 'row', 
    },
    
   loginForgotPasswordText:{
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#00000',
    
 }, 
 flatNotiView: { marginBottom: 5, width: width },
 controlPanel:{
  flexDirection:'row',width:width,marginLeft:20,marginTop:15
},
controlPanelImage:{
  width: 20, height:20, marginRight: 20, marginLeft: 10
},
controlPaneluserImg: {
  width: 30, height:30, marginRight: 20, marginLeft: 10
},
controlPanelAppVersionText:{
  fontSize: 10,textAlign:'center',justifyContent:'center', color: Colors.COLOR.lightRed
},
controlpanelPrivacyText: {
  fontSize: 10,textAlign:'center',justifyContent:'center', color: Colors.COLOR.lightRed
},
controlRowView:{
  width:width,marginTop:15,flexDirection:'row'
},
controlRowMargin:{
  width:width/6.5,flexDirection:'row'
},
controlLineView:{
  width:width/1.54,borderBottomColor: '#c0c0c0',borderBottomWidth: 0.5,marginTop:0
},
controlPanelText:{
  marginLeft:16,color:'#191919'
},
controlPanelLine:{
  width:width/1.25,borderBottomColor: '#c0c0c0',borderBottomWidth: 0.5,marginTop:15
},
settingImage: {
  width: 20,height: 20
},
settingHeadingText: {
  fontSize: 30, fontFamily: 'Roboto-regular'
},
settingText:{
  fontSize: 18, fontFamily: 'Roboto-regular', color: 'black',fontWeight:'bold'
},
settingBorderLine: {
  margin: 20,borderBottomColor: '#c0c0c0',borderBottomWidth: 0.5
},
profileGradientImg: {
  width: width, height: height/3.0, marginTop: 5
},
profileUserPic: {
  width:165, height: 165,borderRadius: 165/2, borderColor: 'c0c0c0', borderWidth: 1
},
newsCategorySquareView:{

  width: 100, height:100, backgroundColor: Colors.COLOR.whiteColor, shadowColor: '#000',shadowOffset: { width: 5, height: 4 },shadowOpacity: 2,shadowRadius: 2,elevation: 15, alignItems: 'center'
},
politicsNewsCircleView: {
  width: 60, height: 60, borderRadius: 60/2, backgroundColor: 'red',justifyContent: 'center', alignItems: 'center' 
},
sportsNewsCircleView: {
  width: 60, height: 60, borderRadius: 60/2, backgroundColor:Colors.COLOR.lightRed,justifyContent: 'center', alignItems: 'center'
},
travelsNewsCircleView: {
  width: 60, height: 60, borderRadius: 60/2, backgroundColor: '#3ee1aa',justifyContent: 'center', alignItems: 'center'
},
healthNewsCircleView:{
  width: 60, height: 60, borderRadius: 60/2, backgroundColor: '#FFA500',justifyContent: 'center', alignItems: 'center'
},
techNewsCircleView:{
  width: 60, height: 60, borderRadius: 60/2, backgroundColor: '#9400D3',justifyContent: 'center', alignItems: 'center'
},
businessNewsCircleView:{
  width: 60, height: 60, borderRadius: 60/2, backgroundColor:Colors.COLOR.lightRed,justifyContent: 'center', alignItems: 'center'
},
scienceNewsCircleView: {
  width: 60, height: 60, borderRadius: 60/2, backgroundColor: '#FFD700',justifyContent: 'center', alignItems: 'center'
},
mobileNewsCircleView: {
  width: 60, height: 60, borderRadius: 60/2, backgroundColor:Colors.COLOR.lightRed,justifyContent: 'center', alignItems: 'center'
},
  autoMobileNewsCircleView: {
    width: 60, height: 60, borderRadius: 60/2, backgroundColor: '#c0c0c0',justifyContent: 'center', alignItems: 'center'
  },
educationNewsCircleView:{
  width: 60, height: 60, borderRadius: 60/2, backgroundColor: 'red',justifyContent: 'center', alignItems: 'center'
},
newsCategoryImgStyle:{
  width : 20, height: 20
},
newsCategoryCardStyle: {
  width: width-10, borderColor: '#c0c0c0',  flexDirection: 'row'
},
newsCategoryTouchableStyle: {
  justifyContent: 'center', alignItems: 'center', margin: 10, flexDirection: 'row'
},

liveNewsImgView: {
  width: 50, height: 50, borderRadius: 50/2,marginLeft: 10, marginRight: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10
},
liveNewsImgStyle: {
  width : 50, height: 50, borderRadius: 50/2,
},
containerLoading:{
  flex: 1,position: 'absolute',top: 0,right: 0,bottom: 0,left: 0,alignItems: 'center',justifyContent: 'center',backgroundColor: Colors.COLOR.whiteColor
},
loadingContainer:{
  padding: 12,backgroundColor: Colors.COLOR.whiteColor,borderRadius: 8,opacity: .8,justifyContent: 'center',alignItems: 'center'
},
spinnerHight:{
  width: 100, height: 100
},
updateProfileCard:{
  width: width - 10,marginTop: 10,shadowColor: "#000",shadowOffset: { width: 5, height: 4 },shadowOpacity: 2,shadowRadius: 2,elevation: 5,
  backgroundColor:Colors.COLOR.whiteColor,marginLeft: 5
},

updateProfileSaveBtn:{
width: 120,height: 50,backgroundColor: Colors.COLOR.lightRed,justifyContent: 'center'
},

updateProfileSaveBtnTxt:{
  color:Colors.COLOR.whiteColor, textAlign: "center", fontSize: 18 
 },
 updateProfileDialogImg:{
  width:100,height:100
 },
  CongratesTxtDialog: {
    color:'#0a8743',fontSize:18
  },
  DialogSuccessText: {
    color:'#505050',fontSize:14,marginTop:10
  },
  DialogOKTouch: {
    backgroundColor:'#0a8743',width:width/3,height:width/8,justifyContent:'center',alignItems:'center'  
  },

 DialogOKText : {
    color:'#fff',fontSize:15
    },
 TrendingCircleImg:{
      width: 50, height: 50, borderRadius: 50/2
    },
TrendingCircleImg:{
      width: 50, height: 50, borderRadius: 50/2
    },
TrendingCatText:{
      fontSize: 14, color: '#191919'
        },
   TrendingMsgText:{
          fontSize: 12, marginTop: 5
        },
  TrendingClockImg:{
    width: 12,height: 12, marginRight: 5
  },
  TrendingClockTxt:{
    fontSize: 14, color: Colors.COLOR.lightRed, marginRight: 5
    },
    newsClockImg: {
      width: 12,height: 12, marginRight: 5
    },
    newsClockText:{
      fontSize: 12, color: Colors.COLOR.lightRed, marginRight: 5
    },
    newsHeadingTxt: {
      fontSize: 14, color: '#191919'
    },
    newsMsgTxt: {
      fontSize: 12, marginTop: 5  
      },
  newsDetailsHeadingTxt: {
        fontSize: 16, textAlign: 'center', fontWeight: 'bold', marginTop: 10
              },
  newsDetailsClockImg:{
    width: 12,height: 12, marginRight: 5, marginLeft: 10
    },
    newsDetailsDate:{
      fontSize: 12, color: Colors.COLOR.lightRed     
     },
     newsDetailsImg:{
      width: width-10, height: 300
    },
newsDetailsShortDes:{
  fontSize: 14,   marginTop: 10, marginLeft: 20, marginRight: 10
},

newsDetailsMsg:{
  fontSize: 14,marginTop: 5,marginLeft: 20,marginRight: 10
},
aboutUsLogoImg:{
  width: 200, height: 200
},
allIndiaTestCard: {
  width: width-20,marginLeft:5
},
allIndiaTestView: {
  flexDirection: 'row', justifyContent: 'space-between', marginTop: 10
},
allIndiaTestCatTxt:{
  fontSize: 16, fontWeight: 'bold', marginLeft: 10
},
allIndiaPostedDate:{
  fontSize: 14, marginRight: 10
},
allIndiaHeadingText:{
  fontSize: 14,marginLeft: 10
},
allIndiaExamDate:{
  fontSize: 14, marginRight: 10
},
allIndiaRegView:{
  width: width-30, height: 40, borderColor: Colors.COLOR.lightRed, borderWidth: 1, justifyContent: 'center', marginTop: 10
},
allIndiaRegText:{
  textAlign: 'center', color: Colors.COLOR.lightRed
},
authuserOopsImg:{
  width: 100, height: 100
},
authSubmitBtnView:{
  width: "90%",alignItems: "center",backgroundColor: Colors.COLOR.lightRed,margin: 10,height: 40,justifyContent: "center"
},
authSubmitBtnTest:{
  fontFamily: "GoogleSans-Regular",
  fontSize: 25,
  textAlign: "center",
  color: "white"
},
authUserTextInPutStyle:{
  color: Colors.COLOR.lightRed,
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "GoogleSans-Regular",
  fontSize: 20
},
userAuthText:{
  marginBottom: 20,
  color: Colors.COLOR.lightRed,
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "GoogleSans-Regular",
  fontSize: 20
},
authUserLogoImg:{
  width: 100, height: 100 
},
authUserCardStyle:{
  width: width - 30,
  alignItems: "center",
  height: width / 1.6

},
authUserInputView:{
  width: "85%",
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#808080",
  justifyContent: "center",
  height: 40,
  borderRadius:4,
  marginLeft:10
 
},
authUserOkDialogTxt:{
  color: Colors.COLOR.whiteColor, fontSize: 15 
},
authUserOKDialogTouch:{
  backgroundColor: "#f44336",
  width: width / 3,
  height: width / 8,
  justifyContent: "center",
  alignItems: "center"

},
authUserDialogOkView:{
  justifyContent: "center",alignItems: "center",marginTop: 20
},
authvalidkeyDialogTxt:{
  color: "#505050",
  fontSize: 14,
  marginTop: 10,
  textAlign: "justify"
},
authvalidkeyDialogView:{
  alignItems: "center",
  justifyContent: "center",
  marginTop: -15
},
rateDialogeRightButton: {
  backgroundColor: '#800',
  width: width / 3,
  height: width / 8,
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 50
},
rateDialogeLeftButton: {
  backgroundColor: '#800',
  width: width / 3,
  height: width / 8,
  justifyContent: "center",
  alignItems: "center"
},
rateDialogeContainer: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 20
},
headerText:{
  fontSize: 20, fontFamily: 'Roboto-regular', color: '#000000', textAlign:'center',
  flex:1,
  padding:10
},
menuText:{
  fontSize: 16, fontFamily: 'Roboto-regular', color: '#fff', textAlign:'center',
  margin:10
},
menuItemView:{
  width: width,height: 40, flexDirection: 'row' , 
  margin:5
},
menuItemImage:{
  width: 20, height: 20,
  marginLeft:5,
  marginRight:5,
  marginTop:10
 
},
imageMenuSize:{
  
    width: 100, height: 100,
    borderRadius: 100 / 2,
    marginTop:10,
    padding:5
 
},
imageMenuIcon:{
  width: 25, height: 20, 
},
header:{
  height: 50,  flexDirection: 'row',marginLeft:100, shadowColor: '#000',shadowOffset: { width: 5, height: 4 },shadowOpacity: 2,shadowRadius: 2,elevation: 15, alignItems: 'center'
},
lohinHeaderText:{
  fontSize: 20,fontFamily:'bold', color:'white', textAlign: "center",marginTop:20
  },
  containerLogin:{
    height:'50%',
    margin:20,
    borderRadius:10,
    backgroundColor:'white'

  },
  textBlack:{
    fontSize: 16, fontFamily: 'Roboto-regular', color: 'black', textAlign:'center',
    margin:10
  },
  textInputView:{
   height: 50, backgroundColor:'white', flexDirection: 'row',
    marginTop:15,
    marginLeft:5,marginRight:5
  },
  loginIconImage:{
      width:20, height:20, margin:5
  },
  loginButton:{
    fontSize:16,
   marginLeft:20,
   marginRight:20,
   marginTop:20,
   backgroundColor:'#E91E63'
   
  },
  logoutView:{
    width:'80%',
    height:40,
    fontSize:16,
    marginLeft:20,
    marginRight:20,
    marginTop:20,
    backgroundColor:'#E91E63',
    alignItems:'center',
    borderRadius:10

  },
  dishImage:{
    width:150, height:80, marginLeft:25,marginTop:10
  },
  containerProfile:{
    
   
    alignItems:'center'
  },
  textProfileBlack:{
    fontSize: 16, fontFamily: 'Roboto-regular', color: 'black', 
    marginLeft:10
  },
  containerLight:{
    flex: 1,
    backgroundColor:"#C8C8C8",
    flexDirection:'column'
  },
jobSeekerImageMainView:{ marginTop: 15 }
}
