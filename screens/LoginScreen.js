import React, { Component } from 'react';
import { View, Text ,StatusBar,TextInput,StyleSheet,TouchableOpacity,Image,Animated,ActivityIndicator} from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons,Ionicons,FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { SocialIcon } from 'react-native-elements'
import firebase from 'firebase';
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        opacity:new Animated.Value(.2),
        padding:new Animated.Value(20),
        email:'',
        sifre:'',
        uyari:false,
        uyariMetni:'',
        bekleniyor:false
    };
  }
  componentDidMount = () => {
      Animated.parallel([
        Animated.timing(this.state.opacity,{
            toValue:1,
            duration:500
        }),
        Animated.timing(this.state.padding,{
            toValue:50,
            duration:500
        })

      ]).start()
   
  };
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  giris = async () =>{
    this.setState({bekleniyor:true})
    if(this.validateEmail(this.state.email)){
      if(this.state.sifre ==''){
          this.setState({uyari:true,uyariMetni:'Lütfen şifre kısmını boş geçmeyin.'})
          this.setState({bekleniyor:false})
      }else{
        
              firebase
              .auth()
              .signInWithEmailAndPassword(this.state.email, this.state.sifre)
              .then(() => this.setState({bekleniyor:false}))
              .catch(error =>  {console.log(error);this.setState({bekleniyor:false})})
          
      }
    }else{
          this.setState({uyari:true,uyariMetni:'Lütfen geçerli bir email girin.'})
          this.setState({bekleniyor:false})
    }
}
  render() {
    return (
        <Animated.View style={{flex:1,padding:this.state.padding,opacity:this.state.opacity}}>
            <StatusBar hidden={true} />
            <Text style={{fontSize:30,fontWeight:'bold',color:'#252525'}}>Giriş Yap</Text>
            <View style={{backgroundColor: 'white',alignItems: 'center',flexDirection: 'row',width:'90%',marginTop:50}}>
                <Ionicons name="md-person" size={30} style= {{color:'#C1C1C1'}} />
               <TextInput
                 style={{backgroundColor: 'white',padding:10,fontSize:19,width:'100%'}}
                 placeholder='Email'
                 onChangeText={(email) => this.setState({email})}
                />
            </View>
            <View style={{height:.65,width:'100%',backgroundColor:'#C1C1C1',borderRadius:5}}></View>
            <View style={{backgroundColor: 'white',alignItems: 'center',flexDirection: 'row',width:'90%',marginTop:20}}>
                <FontAwesome name="lock" size={30} style= {{color:'#C1C1C1'}} />
               <TextInput
                 style={{backgroundColor: 'white',padding:10,fontSize:19,width:'100%'}}
                 placeholder='Şifre'
                 onChangeText={(sifre) => this.setState({sifre})}
                 secureTextEntry
                />
            </View>
            <View style={{height:.65,width:'100%',backgroundColor:'#D5D5D5',borderRadius:5}}></View>
            <View style={{marginTop:10}}></View>
            {this.state.uyari ?<Text style={{textAlign:'center',color:'#EE2727'}}>{this.state.uyariMetni}</Text>:null}
            <TouchableOpacity onPress={this.giris}
             style={{backgroundColor:'#ff004f',borderRadius:10,justifyContent:'center',alignItems: 'center',height:50,marginTop:30,shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.00,

                elevation: 1,}}>
                  {this.state.bekleniyor ?<ActivityIndicator color='white' /> :<Text style={{fontSize:19,color:'white',fontWeight:'bold'}}>GİRİŞ YAP</Text> }
                  
                  </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')} style={{backgroundColor:'white',borderRadius:10,justifyContent:'center',alignItems: 'center',height:50,marginTop:30,shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.00,

                elevation: 1
                }}>
                    <Text style={{fontSize:19,color:'black',fontWeight:'bold'}} >KAYIT OL</Text>
                </TouchableOpacity>
        <Text onPress={()=>this.props.navigation.navigate('Password')} style={{fontSize:16,color:'#C1C1C1',fontWeight:'bold',marginTop: 20,}}>Şifremi mi unuttum ?</Text>

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
  