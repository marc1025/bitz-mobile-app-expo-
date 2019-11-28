import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  
  _gotolinks = () => {
    this.props.navigation.navigate('Links');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.props.navigation.state.params)}</Text>
        <TouchableOpacity onPress={this._gotolinks}>
          <Text style={{color:'blue'}}>GO to Links Page </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._signOutAsync}>
          <Text style={{color:'blue'}}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  
});
