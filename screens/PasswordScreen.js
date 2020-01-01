import React, { Component } from 'react';
import 
{ View, Text ,StatusBar,TextInput,StyleSheet,TouchableOpacity,Image,Animated,Easing} 
from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons,Ionicons,FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { SocialIcon } from 'react-native-elements'
import firebase from 'firebase';
export default class PasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        opacity:new Animated.Value(.2),
        padding:new Animated.Value(-100),
        email:'',
        sifre:'',
        sifre_tekrar:'',
        uyari:false,
        uyariMetni:'',
        translateY1:new Animated.Value(600)
    };
  }
  componentDidMount = () => {
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
  sifirla = async () =>{
      if(this.validateEmail(this.state.email)){
        firebase.auth().sendPasswordResetEmail(this.state.email)
          .then(()=> {
            Animated.timing(this.state.translateY1,{
              toValue:10,
              duration:500,
              easing: Easing.out(Easing.exp),
              useNativeDriver: true
            }).start()
            this.setState({uyari:false,uyariMetni:''})
          }).catch((e) => {
            console.log(e)
      })
      }else{
            this.setState({uyari:true,uyariMetni:'Lütfen geçerli bir email girin.'})
      }
  }

  render() {
    return (
      <Animated.View style={{flex:1,padding:40,transform:[{translateX:this.state.padding}],opacity:this.state.opacity}}>
            <StatusBar hidden={true} />

            <Text style={{fontSize:30,fontWeight:'bold',color:'#252525'}}>Şifre Sıfırlama</Text>
            <View style={{backgroundColor: 'white',alignItems: 'center',flexDirection: 'row',width:'90%',marginTop:50}}>
                <Ionicons name="md-person" size={30} style= {{color:'#C1C1C1'}} />
               <TextInput
                 style={{backgroundColor: 'white',padding:10,fontSize:19,width:'100%'}}
                 onChangeText={(email) => this.setState({email})}
                
                
                 placeholder='Email'
                />
            </View>
            <View style={{height:.65,width:'100%',backgroundColor:'#C1C1C1',borderRadius:5}}></View>
           
            <View style={{marginTop:10}}></View>
            {this.state.uyari ?<Text style={{textAlign:'center',color:'#EE2727'}}>{this.state.uyariMetni}</Text>:null}
            <TouchableOpacity onPress={this.sifirla} style={{backgroundColor:'#5d3f6a',borderRadius:10,justifyContent:'center',alignItems: 'center',height:50,marginTop:30,shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.00,

                elevation: 1,}}>
            <Text style={{fontSize:19,color:'white',fontWeight:'bold'}}>Şifremi Sıfırla</Text>
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
                           <Animated.View style={{shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.00,

                elevation: 1,width:300,height:100,backgroundColor:'white',justifyContent:'center',alignItems: 'center',transform:[{translateY:this.state.translateY1,}]}}>
                  <Image source={require('../assets/images/basarili.png')} style={{width:50,height:50}}/>
                  <Text style={{fontSize:19,color:'black',fontWeight:'bold'}}>Şifreniz başarıyla gönderildi.</Text>
                </Animated.View>

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
  