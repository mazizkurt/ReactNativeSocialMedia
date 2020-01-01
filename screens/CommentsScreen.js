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
  KeyboardAvoidingView
} from 'react-native';
import { Ionicons,MaterialIcons,FontAwesome ,Feather} from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';
import firebase from 'firebase';
import { TextInput } from 'react-native-gesture-handler';

export default class CommentsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions={
      header:null
  }
  render() {
    return (
        <View style={{flex:1,backgroundColor:'rgb(21,15,61)'}}>
            <KeyboardAvoidingView behavior="position">
            <StatusBar backgroundColor="blue" barStyle="light-content" />

            <View style={{width:'100%',height:420,backgroundColor:'rgb(179,17,255)',borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
                    <View style={{width:'100%',justifyContent:'center',alignItems:'center',}}>
                            <ImageBackground source={{uri:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg'}} style={{width:'100%',height:300}}>
                                <TouchableOpacity style={{position: 'absolute',top: 30,left:10}} onPress={()=>this.props.navigation.goBack(null)}>
                                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                        <Feather  name='arrow-left'  size={25} color='white' />
                                        <View style={{width:30}}></View>
                                        <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Yorumlar</Text>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                        
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:25}}>
                        <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                            <Text style={{fontSize:19,fontWeight:'bold',color:'white',}}>Neon Transparent</Text>
                            <Text style={{fontSize:15,fontWeight:'bold',color:'white',marginTop:5}}>Aziz Kurt</Text>
                        
                        </View>
                        
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <Feather  name='heart'  size={25} color='black' />
                                <Text style={{fontSize:15,fontWeight:'bold',color:'white',marginLeft:10}}>137</Text>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Comments')}><Feather  name='message-circle'  size={25} color='black'  style={{marginLeft:10}}/></TouchableOpacity>
                                <Text style={{fontSize:15,fontWeight:'bold',color:'white',marginLeft:10}}>23</Text>
                            </View>

                            </View>
                            <View style={{flexDirection:'row',marginLeft:25,marginTop:-15}}>
                                <Image source={{uri:'https://iasbh.tmgrup.com.tr/41044b/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2018/07/16/musluman-oldugu-bilinmiyen-unluler-1531764033600.jpg&mw=752&mh=700&l=1'}} style={{borderWidth:2,borderColor:'white',width:25,height:25,borderRadius:12.5}}/>
                                <Image source={{uri:'https://img.gecce.com.tr/2019/03/17/unluler-inst-152703QG.jpg'}} style={{borderWidth:2,borderColor:'white',width:25,height:25,borderRadius:12.5,position: 'absolute',left:12.5}}/>
                            </View>
            </View>
            
                <ScrollView  style={{padding:20}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={{uri:'https://iasbh.tmgrup.com.tr/41044b/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2018/07/16/musluman-oldugu-bilinmiyen-unluler-1531764033600.jpg&mw=752&mh=700&l=1'}} style={{borderWidth:2,borderColor:'white',width:50,height:50,borderRadius:25}}/>
                        <View style={{flexDirection:'column',marginLeft:10}}>
                            <Text style={{fontSize:15,fontWeight:'bold',color:'white',marginTop:5}}>Aziz Kurt</Text>
                            <Text style={{fontSize:17,fontWeight:'bold',color:'white',marginTop:5}}>Harika !</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                        <Image source={{uri:'https://img.gecce.com.tr/2019/03/17/unluler-inst-152703QG.jpg'}} style={{borderWidth:2,borderColor:'white',width:50,height:50,borderRadius:25}}/>
                        <View style={{flexDirection:'column',marginLeft:10}}>
                            <Text style={{fontSize:15,fontWeight:'bold',color:'white',marginTop:5}}>Aziz Kurt</Text>
                            <Text style={{fontSize:17,fontWeight:'bold',color:'white',marginTop:5}}>Mütiş !</Text>
                        </View>
                    </View>
                    
                </ScrollView>
                
                <View style={{width:'100%',justifyContent: 'center',alignItems: 'center',marginTop:20}}>
                    <View style={{width:'95%',padding:20,backgroundColor:'white',borderRadius:60,flexDirection:'row',alignItems:'center'}}>
                        <View style={{width:'90%',flexDirection:'row',alignItems: 'center',}}>
                            <Image source={{uri:'https://img.gecce.com.tr/2019/03/17/unluler-inst-152703QG.jpg'}} style={{borderWidth:2,borderColor:'white',width:25,height:25,borderRadius:12.5}}/>
                            <TextInput style={{fontSize:15,fontWeight:'bold',color:'gray',marginLeft:10,width:'80%',height:'70%'}} placeholder='Yorum yaz ...' placeholderTextColor='gray'  />
                        </View>
                        <View style={{width:'10%'}}>
                            <Feather  name='send'  size={25} color='#ff004f' />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
           
        </View>
    );
  }
}
