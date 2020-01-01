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
  StatusBar
} from 'react-native';
import { Ionicons,MaterialIcons,FontAwesome ,Feather} from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';
import firebase from 'firebase';

export default class HomeScreen extends React.Component {
  
  yayin(){
    return(
      <View>
      <Text style={{fontSize:32,fontWeight:'bold',color:'#252525',padding:25}} onPress={()=>firebase.auth().signOut()}>Haykıranlar</Text>
      <View style={{width:'90%',flexDirection:'row',alignItems:'center',justifyContent: 'center'}}>
        <Image source={{uri:'https://media1.tenor.com/images/3eb5118cbe8ea3dbba845d680cbcf9b2/tenor.gif?itemid=8279022'}} style={{width:50,height:50,borderRadius:25,marginLeft:10}}/>
        <Image source={{uri:'http://www.promotionbaba.com/wp-content/uploads/2017/12/sad.gif'}} style={{width:50,height:50,borderRadius:25,marginLeft:10}}/>
        <Image source={{uri:'http://www.promotionbaba.com/wp-content/uploads/2017/12/angry.gif'}} style={{width:50,height:50,borderRadius:25,marginLeft:10}}/>
        <Image source={{uri:'https://media1.tenor.com/images/43be13f70cc28fc4b5b5bb68a2844d57/tenor.gif?itemid=9501715'}} style={{width:50,height:50,borderRadius:25,marginLeft:10}}/>
        <Image source={{uri:'https://media.giphy.com/media/jQEOqDmlCxLPID0jlV/giphy.gif'}} style={{width:50,height:50,borderRadius:25,marginLeft:10}}/>
      </View>
      </View>
    )
  }

  render(){

 
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <ScrollView indicatorStyle='white'>
            {this.yayin()}
          {/* Gönderi Alanı */}
          <View>
                  <View style={{width:'100%',justifyContent:'center',alignItems:'center',padding:15}}>
                      <Text style={{fontSize:19,fontWeight:'bold',color:'#252525',padding:10}}>
                      Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
                      </Text>
                  </View>
                  
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:25,marginTop:-30}}>
                    <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                      <Text style={{fontSize:19,fontWeight:'bold',color:'#252525',}}>Neon Transparent</Text>
                      <Text style={{fontSize:15,fontWeight:'bold',color:'#737373'}}>Aziz Kurt</Text>
                    
                    </View>
                  
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                          <Feather  name='heart'  size={25} color='black' />
                          <Text style={{fontSize:15,fontWeight:'bold',color:'#252525',marginLeft:0}}>137</Text>
                          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Comments')}><Feather  name='message-circle'  size={25} color='black'  style={{marginLeft:10}}/></TouchableOpacity>
                          <Text style={{fontSize:15,fontWeight:'bold',color:'#252525',marginLeft:0}}>23</Text>
                          <Image source={{uri:'https://secure.webtoolhub.com/static/resources/icons/set73/47b6dc32.png'}} style={{width:25,height:25,marginLeft:10,transform:[{rotateY:'180deg'}]}}/>
                          <Text style={{fontSize:15,fontWeight:'bold',color:'#252525',marginLeft:0}}>23</Text>
                        </View>

                      </View>
                      <View style={{flexDirection:'row',marginLeft:25,marginTop:-15}}>
                          <Image source={{uri:'https://iasbh.tmgrup.com.tr/41044b/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2018/07/16/musluman-oldugu-bilinmiyen-unluler-1531764033600.jpg&mw=752&mh=700&l=1'}} style={{borderWidth:2,borderColor:'white',width:25,height:25,borderRadius:12.5}}/>
                          <Image source={{uri:'https://img.gecce.com.tr/2019/03/17/unluler-inst-152703QG.jpg'}} style={{borderWidth:2,borderColor:'white',width:25,height:25,borderRadius:12.5,position: 'absolute',left:12.5}}/>
                      </View>
          </View>
          {/* Gönderi Alanı */}
          <View style={{width:'100%',borderColor:'#EEEEEE',borderWidth:.4,height:1,marginTop:10}}></View>
          <View>
                  <View style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:20,padding:10}}>
                    
                      <View style={{width:'90%',height:70,borderRadius:10,alignItems:'center',flexDirection:'row',}}>
                      <Feather  name='play'  size={25} color='black' />
                        <Image source={{uri:'https://www.shaa.com/wp-content/uploads/2014/02/Equalizer_03.gif'}} style={{width:'90%',height:100,justifyContent:'center',marginLeft:10}}/>
                      </View>
                  </View>
                  
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:25,marginTop:-5}}>
                    <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                      <Text style={{fontSize:19,fontWeight:'bold',color:'#252525',}}>Neon Transparent</Text>
                      <Text style={{fontSize:15,fontWeight:'bold',color:'#737373'}}>Aziz Kurt</Text>
                    
                    </View>
                  
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                          <Feather  name='heart'  size={25} color='black' />
                          <Text style={{fontSize:15,fontWeight:'bold',color:'#252525',marginLeft:10}}>137</Text>
                          <Feather  name='message-circle'  size={25} color='black'  style={{marginLeft:10}}/>
                          <Text style={{fontSize:15,fontWeight:'bold',color:'#252525',marginLeft:10}}>23</Text>
                        </View>

                      </View>
                      <View style={{flexDirection:'row',marginLeft:25,marginTop:-15}}>
                          <Image source={{uri:'https://iasbh.tmgrup.com.tr/41044b/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2018/07/16/musluman-oldugu-bilinmiyen-unluler-1531764033600.jpg&mw=752&mh=700&l=1'}} style={{borderWidth:2,borderColor:'white',width:25,height:25,borderRadius:12.5}}/>
                          <Image source={{uri:'https://img.gecce.com.tr/2019/03/17/unluler-inst-152703QG.jpg'}} style={{borderWidth:2,borderColor:'white',width:25,height:25,borderRadius:12.5,position: 'absolute',left:12.5}}/>
                      </View>
          </View>
          {/* Gönderi Alanı */}   
          <View style={{width:'100%',borderColor:'#EEEEEE',borderWidth:.4,height:1,marginTop:10}}></View>
           <View>
                  <View style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:20}}>
                      <Image source={{uri:'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Wallpapers-Full-HD-Download.jpg'}} style={{width:'90%',height:300,borderRadius:30,}}/>
                  </View>
                  
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:25}}>
                    <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                      <Text style={{fontSize:19,fontWeight:'bold',color:'#252525',}}>Neon Transparent</Text>
                      <Text style={{fontSize:15,fontWeight:'bold',color:'#737373'}}>Aziz Kurt</Text>
                    
                    </View>
                  
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                          <Feather  name='heart'  size={25} color='black' />
                          <Text style={{fontSize:15,fontWeight:'bold',color:'#252525',marginLeft:10}}>137</Text>
                          <Feather  name='message-circle'  size={25} color='black'  style={{marginLeft:10}}/>
                          <Text style={{fontSize:15,fontWeight:'bold',color:'#252525',marginLeft:10}}>23</Text>
                        </View>

                      </View>
                      <View style={{flexDirection:'row',marginLeft:25,marginTop:-15}}>
                          <Image source={{uri:'https://iasbh.tmgrup.com.tr/41044b/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2018/07/16/musluman-oldugu-bilinmiyen-unluler-1531764033600.jpg&mw=752&mh=700&l=1'}} style={{borderWidth:2,borderColor:'white',width:25,height:25,borderRadius:12.5}}/>
                          <Image source={{uri:'https://img.gecce.com.tr/2019/03/17/unluler-inst-152703QG.jpg'}} style={{borderWidth:2,borderColor:'white',width:25,height:25,borderRadius:12.5,position: 'absolute',left:12.5}}/>
                      </View>
          </View>
          {/* Gönderi Alanı */}
          
        </ScrollView>
   
    </View>
  );
}
}

HomeScreen.navigationOptions = {
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
  
});
