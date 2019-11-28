import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'bitz',
    title: 'bitz',
    text: 'Your payment app for festivals',
    image: require('../../assets/images/Bitz-White.png'),
    btn_text:'how does it work?'
  },
  {
    key: 'wallets',
    title: 'wallets',
    text: 'Get tokens and use your wallet to pay',
    image: require('../../assets/images/wallets.gif'),
    btn_text:'greate, what else?'
  },
  {
    key: 'places',
    title: 'places',
    text: 'Create your own order and pick it up',
    image: require('../../assets/images/places.gif'),
    btn_text:'awesome, let me in!'
  },
  {
    key: 'sign_in',
    title: 'sign in',
    text: "Tell us who you are, we won't tell anyone!",
    image: require('../../assets/images/login.gif'),
    btn_text:'LOGIN'
  },
];

export default class Loading extends React.Component {
  _renderItem = props => (
    <View style={styles.mainContent}>
      <View style={props.key=='bitz' ? styles.bitz_view : styles.icon_view}>
        <Image source={props.image} style={props.key=='bitz' ? styles.bitz_icon :styles.logo_icon}/>
      </View>
      <View>
        <Text style={props.key=='bitz'? styles.bitz_title : styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <TouchableOpacity style={styles.custom_button_style}>
        <Text style={styles.custom_button_text}>{props.btn_text}</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <LinearGradient
        style={[styles.mainContent, {
          flex: 1,
          // resizeMode: 'cover',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }]}
        colors={['rgb(250, 184,45)', 'rgb(252,129,63)']}
        start={{x: 0, y: 0}} end={{x: 1, y: 1}}
      >
        <AppIntroSlider
            slides={slides}
            renderItem={this._renderItem}
            bottomButton = {true}
            buttonStyle={styles.button_style}
            // buttonTextStyle={styles.button_text}
            dotStyle={{display:'none'}}
            activeDotStyle={{display:'none'}}
            nextLabel={''}
            doneLabel={''}
            onDone={this.props.click_login}
          />
      </LinearGradient>
      
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    height: Dimensions.get('window').height, 
    width: Dimensions.get('window').width, 
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  bitz_view:{
    top:'10.5%',
    height: '36.16%'
  },
  bitz_icon:{
    // width:119.44,
    height:'70%',
    resizeMode:'contain'
  },
  bitz_title:{
    marginTop: '7.5%',
    fontSize: 47,
    fontWeight: '700',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  icon_view:{
    top:'7.5%',
    shadowOpacity:0.6,
    shadowColor:'#000000',
    shadowRadius:15,
  },
  logo_icon:{
    width:0.3616*Dimensions.get('window').height,
    height:0.3616*Dimensions.get('window').height,
    borderWidth:5,
    borderColor:'#fc873c',
    borderRadius: 0.3616*Dimensions.get('window').height/2,
  },
  title: {
    marginTop: 70,
    fontSize: 47,
    fontWeight: '700',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  text: {
    marginTop: 30,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    width:270,
    fontSize:28,
    fontWeight: '600'
  },
  button_style:{
    bottom:45,
    width:'90%',
    height: '6%',
    // borderWidth:2,
    backgroundColor: 'transparent',
    borderColor:'white',
    borderRadius: 25,
    alignSelf: 'center'
  },
  button_text:{
    color:'white',
    fontSize: 18,
    alignSelf: 'center'
  },
  custom_button_style:{
    // zindex:1,
    position: 'absolute',
    bottom:60,
    width:'84%',
    height: '8.5%',
    borderWidth:2,
    backgroundColor: 'transparent',
    borderColor:'white',
    borderRadius: 25,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  custom_button_text:{
    color:'white',
    fontSize: 18,
  }
});