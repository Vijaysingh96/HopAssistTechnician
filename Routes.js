import { AsyncStorage, Platform, Alert } from 'react-native';
import { Actions, Router, Stack, Scene } from 'react-native-router-flux';
import React from 'react';
import { BackHandler } from 'react-native'
import Splash from './screens/splash'
import ViewPager from './screens/viewPager'
import SignUp from './screens/signUp'
import Login from './screens/login'
import Register from './screens/register'

 

_backAndroidHandler = () => {
  const scene = Actions.currentScene;
  // alert(scene)
  if (scene === 'Tabs' || scene === 'Home') {
    AsyncStorage.setItem("backEvent", "" + true);
    // console.log("backEvent test "+backEvent);
    BackHandler.exitApp();
    return true;
  }
  Actions.pop();
  return true;
};


const Routes = () => (
  <Router
    navigationBarStyle={{ backgroundColor: '#8B008B', height: 45 }} tintColor='white' backAndroidHandler={this._backAndroidHandler}>

    <Stack key="root">
    <Scene key="Splash" component={Splash} left={()=>null} hideNavBar />
    <Scene key="ViewPager" component={ViewPager} left ={() => null} hideNavBar />
    <Scene key="SignUp" component={SignUp} left={()=>null} hideNavBar />
    <Scene key="Login" component={Login} left={() => null} hideNavBar />
    <Scene key="Register" component={Register} left={() => null} hideNavBar />
     
     
      
    </Stack>
  </Router>
);
export default Routes;

