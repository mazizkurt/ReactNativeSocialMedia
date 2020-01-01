import React, { Component } from 'react';
import { View, Text ,StatusBar,Image} from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase';
export default class LoadingScreen extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'Home' : 'Login')
      })
    }, 2000);

  };
 
  render() {
    
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Image  source = {require('../assets/images/image.jpg')} style={{width:100,height:100}}/>
      </View>
    );
  }
}
