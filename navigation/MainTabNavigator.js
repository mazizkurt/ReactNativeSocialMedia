import React from 'react';
import { Platform ,Image,View} from 'react-native';
import { createStackNavigator, createBottomTabNavigator,createSwitchNavigator,createDrawerNavigator,StackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons,MaterialIcons,FontAwesome } from '@expo/vector-icons';
import LoginScreen from '../screens/LoginScreen';
import PasswordScreen from '../screens/PasswordScreen';
import firebase from 'firebase';
import LoadingScreen from '../screens/LoadingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CommentsScreen from '../screens/CommentsScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

var firebaseConfig = {
  apiKey: "AIzaSyAgznmwmksgcUS3FkigsBRMy1FNEJS3KHA",
  authDomain: "haykir-d9a73.firebaseapp.com",
  databaseURL: "https://haykir-d9a73.firebaseio.com",
  projectId: "haykir-d9a73",
  storageBucket: "",
  messagingSenderId: "636580541467",
  appId: "1:636580541467:web:10fe041b720aee76"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {

  tabBarIcon: ({ tintColor }) => (
    <MaterialIcons
      name='home'
      color={tintColor}
      size={30}
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {

  tabBarIcon: ({ tintColor}) => (
      <MaterialIcons  name='search' 
      size={30} color={tintColor} />
   
  ),
};




const LinksStack1 = createStackNavigator(
  {
    Links1: LinksScreen,
  },
  config
);

LinksStack1.navigationOptions = {
  
  style:{
    backgroundColor:'red'
  },
 
  tabBarIcon: ({ tintColor}) => (
  <View>
    <View style={{backgroundColor:'#ff004f',width:50,height:50,borderRadius: 25,shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 3,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.00,
          marginTop:-30,
          elevation: 1,justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity onPress={()=>alert('deneme')}>
                <FontAwesome name='bullhorn' color='white' size={35} />
              </TouchableOpacity>
      </View>
  </View>
    
 
  ),
};



LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
      <Ionicons name='md-trending-up' color={tintColor} size={30} />
  ),
};
const Settings1Stack = createStackNavigator(
  {
    Settings1: SettingsScreen,
  },
  config
);

Settings1Stack.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name='md-heart' color={tintColor} size={30} />
  ),
};
const CommentsStack = createStackNavigator(
  {
    Comments: CommentsScreen,
  },

);

CommentsStack.navigationOptions = {
  header:null
};
const switchNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Password: PasswordScreen,
  },
  {
    initialRouteName:'Loading'
  }
);

switchNavigator.navigationOptions = {
  header:null
};
switchNavigator.path = '';




const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  LinksStack1,
  Settings1Stack,
  SettingsStack,
},{
  navigationOptions: {
    header: null,
  },  
  tabBarOptions: {
    showLabel: false ,
    activeTintColor:'black',
    inactiveTintColor:'gray',
    showIcon: true,
    style: {
      borderTopWidth:0,
      
    
      backgroundColor: 'white',
    },
  }
});

tabNavigator.path = '';

const tabswitch =createStackNavigator({
  tabNavigator,
  CommentsStack
},{
  headerTransitionPreset: 'uikit',
  navigationOptions:{
    header:null
  }
}) 



const switch1Navigator = createSwitchNavigator({
    switchNavigator,
    tabswitch
},{
  navigationOptions:{
    header:null
  }
})

export default switch1Navigator;
