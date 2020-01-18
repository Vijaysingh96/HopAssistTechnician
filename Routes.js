import { AsyncStorage, Platform, Alert } from 'react-native';
import { Actions, Router, Stack, Scene } from 'react-native-router-flux';
import React from 'react';
import Styles from './styles/styles';
import { BackHandler } from 'react-native'
import Splash from './screens/splash'
import ViewPager from './screens/viewPager'
import SignUp from './screens/signUp'
import Login from './screens/login'
import Register from './screens/register'
import Home from './screens/Home'
import NewIntervention from './screens/NewIntervention'
import WorkEstimation from './screens/WorkEstimation'
import Rating from './screens/Rating'
import History from './screens/historys'
import InterventionDetails from './screens/interventionDetails'
import Profile from './screens/Profile'
import EditProfile from './screens/EditProfile'
import Contacts from './screens/Contacts'
import Notification from './screens/Notification'
import Category from './screens/Category'
import Demo from './screens/Demo'
_backAndroidHandler = () => {
  const scene = Actions.currentScene;
  // alert(scene)
  console.log("backEvent test "+scene);
  if (scene === 'Tabs' || scene === 'Home') {
   
    Alert.alert(
      'Quitter l\'application',
      'Voulez-vous sortir?',
      [
        {text: 'Non', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Oui', onPress: () => BackHandler.exitApp()},
      ],
      { cancelable: false });
    // AsyncStorage.setItem("backEvent", "" + true);
    //   alert(scene)
    // // console.log("backEvent test "+backEvent);
    // BackHandler.exitApp();
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
    <Scene key="Home" component={Home} left={() => null} hideNavBar />
    <Scene key="NewIntervention" component={NewIntervention} left={() => null} hideNavBar /> 
     <Scene key="WorkEstimation" component={WorkEstimation} left={() => null} hideNavBar /> 
     <Scene key="Rating" component={Rating} left={() => null} hideNavBar /> 
     <Scene key="History" component={History} left={() => null} hideNavBar /> 
     <Scene key="InterventionDetails" component={InterventionDetails} left={() => null} hideNavBar /> 
     <Scene key="Profile" component={Profile} left={() => null} hideNavBar /> 
     <Scene key="EditProfile" component={EditProfile} left={() => null} hideNavBar />
     <Scene key="Contacts" component={Contacts} left={() => null} hideNavBar />
     <Scene key="Notification" component={Notification} left={() => null} hideNavBar />
     <Scene key="Category" component={Category} left={() => null} hideNavBar />
      
    </Stack>
  </Router>
);
export default Routes;

