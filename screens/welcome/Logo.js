import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { LinearGradient } from 'expo';

export default class HomeScreen extends React.Component {
  componentDidMount(){
    this._gotolinks();
  }
  _gotolinks = () => {
    setTimeout( () => {
      this.props.navigation.navigate('SignIn');
    },3000);
  };
  render() {
    return (
      <LinearGradient
        start={{x:0, y:0}} end={{x:1,y:1}} locations={[0,1]}
        colors={['rgb(250, 184,45)', 'rgb(252,129,63)']}
        style={styles.container}
      >
        <View style={styles.logo_view}>
          <Image style={styles.logo_icon} source={require('../../assets/images/Bitz-White.png')}/>
        </View>
        <Text style={styles.logo_text}>bitz</Text>
      </LinearGradient>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  back_image:{
    position: 'absolute',
    top:0,
    left:0,
    width:'100%',
    height: '100%'
  },
  logo_view:{
    width:84.25,
    height: 176.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_icon:{
    width: '100%',
    resizeMode:'contain'
  },
  logo_text:{
    color:'white',
    fontWeight: '700',
    fontSize: 46
  }
  
});
