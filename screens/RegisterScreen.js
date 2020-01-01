import React, { Component } from 'react';
import 
{ View, Text ,StatusBar,TextInput,StyleSheet,TouchableOpacity,Image,Animated,Easing,Alert} 
from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons,Ionicons,FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { SocialIcon } from 'react-native-elements'
import firebase from 'firebase';
import * as FacebookAds from 'expo-ads-facebook';
FacebookAds.AdSettings.addTestDevice(FacebookAds.AdSettings.currentDeviceHash);
console.log(FacebookAds.AdSettings.currentDeviceHash)
const { AdIconView, AdMediaView ,InterstitialAdManager} = FacebookAds;
export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        opacity:new Animated.Value(.2),
        padding:new Animated.Value(100),
        email:'',
        sifre:'',
        sifre_tekrar:'',
        uyari:false,
        uyariMetni:''
    };
  }
  componentDidMount () {
  
    Animated.parallel([
      Animated.timing(this.state.opacity,{
          toValue:1,
          duration:500,
          useNativeDriver: true
      }),
      Animated.timing(this.state.padding,{
          toValue:0,
          duration:500,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true
      })

    ]).start()
 
};
 validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  kayit = async () =>{
   
      if(this.validateEmail(this.state.email)){
        if(this.state.sifre =='' || this.state.sifre_tekrar ==''){
            this.setState({uyari:true,uyariMetni:'Lütfen şifre kısmını boş geçmeyin.'})
        }else{
            if(this.state.sifre == this.state.sifre_tekrar){
              firebase
              .auth()
              .createUserWithEmailAndPassword(this.state.email, this.state.sifre)
              .then(() => {
                fetch('http://192.168.0.13:9631/users?email='+this.state.email+'&kullanici_adi=anonymus&takipci=0&takipler=0')
                .then((response) => response.json())
                .then((responseJson) => {
                 
                })
                .catch((error) => {
                  Alert.alert('Sunucuya bağlanılamadı','Lütfen daha sonra tekrar deneyin.');
                });
              })
              .catch(error =>  console.log(error))
           
               
            }else{
            this.setState({uyari:true,uyariMetni:'Şifreler uyuşmuyor.'})
            }
        }
      }else{
            this.setState({uyari:true,uyariMetni:'Lütfen geçerli bir email girin.'})
      }
  }

  render() {
    return (
      <Animated.View style={{flex:1,padding:40,transform:[{translateX:this.state.padding}],opacity:this.state.opacity}}>
            <StatusBar hidden={true} />
            <Text style={{fontSize:30,fontWeight:'bold',color:'#252525'}}>Kayıt Ol</Text>
            <View style={{backgroundColor: 'white',alignItems: 'center',flexDirection: 'row',width:'90%',marginTop:50}}>
                <Ionicons name="md-person" size={30} style= {{color:'#C1C1C1'}} />
               <TextInput
                 style={{backgroundColor: 'white',padding:10,fontSize:19,width:'100%'}}
                 onChangeText={(email) => this.setState({email})}
                 returnKeyType = { "next" }
                 onSubmitEditing={() => { this.secondTextInput.focus(); }}
                 placeholder='Email'
                 autoCompleteType='email'
                 keyboardType='email-address'
                />
            </View>
            <View style={{height:.65,width:'100%',backgroundColor:'#C1C1C1',borderRadius:5}}></View>
            <View style={{backgroundColor: 'white',alignItems: 'center',flexDirection: 'row',width:'90%',marginTop:20}}>
                <FontAwesome name="lock" size={30} style= {{color:'#C1C1C1'}} />
               <TextInput
                 style={{backgroundColor: 'white',padding:10,fontSize:19,width:'100%'}}
                 placeholder='Şifre'
                 ref={(input) => { this.secondTextInput = input; }}
                 onChangeText={(sifre) => this.setState({sifre})}
                 returnKeyType = { "next" }
                 onSubmitEditing={() => { this.threeTextInput.focus(); }}
                 secureTextEntry
                />
            </View>
            <View style={{height:.65,width:'100%',backgroundColor:'#D5D5D5',borderRadius:5}}></View>

            <View style={{backgroundColor: 'white',alignItems: 'center',flexDirection: 'row',width:'90%',marginTop:20}}>
                <FontAwesome name="lock" size={30} style= {{color:'#C1C1C1'}} />
               <TextInput
                 style={{backgroundColor: 'white',padding:10,fontSize:19,width:'100%'}}
                 placeholder='Şifre Tekrar'
                 returnKeyType = { 'join'}
                 onSubmitEditing={(event) => this.kayit(event)}
                 ref={(input) => { this.threeTextInput = input; }}
                 onChangeText={(sifre_tekrar) => this.setState({sifre_tekrar})}
                 secureTextEntry
                />
            </View>
            <View style={{height:.65,width:'100%',backgroundColor:'#D5D5D5',borderRadius:5}}></View>
            <View style={{marginTop:10}}></View>
            {this.state.uyari ?<Text style={{textAlign:'center',color:'#EE2727'}}>{this.state.uyariMetni}</Text>:null}
            <TouchableOpacity onPress={this.kayit} style={{backgroundColor:'#5d3f6a',borderRadius:10,justifyContent:'center',alignItems: 'center',height:50,marginTop:30,shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.00,

                elevation: 1,}}>
            <Text style={{fontSize:19,color:'white',fontWeight:'bold'}}>KAYIT OL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}
            style={{backgroundColor:'white',borderRadius:10,justifyContent:'center',alignItems: 'center',height:50,marginTop:30,shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.00,

                elevation: 1,}}><Text style={{fontSize:19,color:'black',fontWeight:'bold'}}>Geri</Text></TouchableOpacity>

      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

  });
  