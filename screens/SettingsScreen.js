import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,Dimensions
} from 'react-native';
import { Ionicons,MaterialIcons,FontAwesome ,Feather} from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';
import firebase from 'firebase';
import { TextInput } from 'react-native-gesture-handler';
const height=Dimensions.get('window').height;
export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions={
      header:null
  }
  yayin(){
    return(
      <Text style={{fontSize:32,fontWeight:'bold',color:'#252525',padding:25}}>Bildirimler</Text>
    
    )
  }
  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <View style={{height:height/3,}}>

    
           {this.yayin()}
         {/* Gönderi Alanı */}
         <View style={{justifyContent: 'center',alignItems: 'center',width:'100%'}}>
          <View style={{flexDirection:'row',backgroundColor: '#EEEEEE',alignItems: 'center',borderRadius:10,width:'90%'}}>
          <Feather  name='search' style={{marginLeft:20}} 
            size={22} color='black' />
            <TextInput style={styles.Input} placeholder='Kişi ara ...'/>
          </View>
         </View>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
          <Text style={{fontSize:22,fontWeight:'bold',color:'#252525',padding:25}}>Bugün</Text>
          <Text style={{fontSize:22,fontWeight:'bold',color:'gray',padding:20}}>Dün</Text>
        </View>
        </View>
        <View style={{height:(2*height)/3,}}>
        <View  style={{backgroundColor:'#3F3E3E',height:(2*height)/3,width:'100%',borderTopLeftRadius:20,borderTopRightRadius:20}}>
          <Text style={{fontSize:22,fontWeight:'bold',color:'gray',padding:20}}>Dün</Text>
          <Text style={{fontSize:22,fontWeight:'bold',color:'gray',padding:20}}>Dün</Text>
          <Text style={{fontSize:22,fontWeight:'bold',color:'gray',padding:20}}>Dün</Text>
          <Text style={{fontSize:22,fontWeight:'bold',color:'gray',padding:20}}>Dün</Text>
          <Text style={{fontSize:22,fontWeight:'bold',color:'gray',padding:20}}>Dün</Text>
        </View>
        </View>
   </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  header:null,
  headerLeft:(
      
      <View style={{flexDirection:'column',padding: 25,}}>
          <View style={{width:17,height:3,backgroundColor:'black',borderRadius:10}}></View>
          <View style={{width:20,height:6,backgroundColor:'transparent',borderRadius:10}}></View>
          <View style={{width:25,height:3,backgroundColor:'black',borderRadius:10}}></View>
        </View>
 
  ),
  headerRight:(
    <Feather  name='message-square' style={{marginRight:20}} 
    size={25} color='black' />
  ),
  headerStyle:{
    height:40,
    borderBottomWidth: 0,
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Input:{
    width:'90%',
    padding:20,
    fontSize:17

  }
  
});