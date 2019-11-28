/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
  Dimensions,
  AppRegistry,
  Component,
  StyleSheet,
  View,
  AsyncStorage,
  Animated
} from 'react-native';

import Loading from './Loading.js';
import {ReactNativeAD, ADLoginView, Logger} from '../../libraries/react-native-azure-ad';

Logger.setLevel('VERBOSE');

const CLIENTID = '7c30dffc-fe50-482b-9c5b-db01617fa246';
const AUTHORITY = 'https://login.microsoftonline.com/bitznetwork.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_LoginMultipleIdp&client_id=7c30dffc-fe50-482b-9c5b-db01617fa246&nonce=defaultNonce&redirect_uri=https%3A%2F%2Flogin.microsoftonline.com%2Ftfp%2Foauth2%2Fnativeclient&scope=openid%20https%3A%2F%2Fbitznetwork.onmicrosoft.com%2Fapi%2Fwrite%20https%3A%2F%2Fbitznetwork.onmicrosoft.com%2Fapi%2Fread%20https%3A%2F%2Fbitznetwork.onmicrosoft.com%2Fapi%2Fuser_impersonation&response_type=id_token%20token&prompt=login';

export default class LoginScreen extends React.Component {

  config = {
    client_id : CLIENTID,
    tenant  : 'bitznetwork.onmicrosoft.com',
    prompt: "login" 
  };

  constructor(props) {
    super(props)
    
    this.AzureADContext = this.config;
    
    this.state = {
      logout:false,
      fadeAnim: new Animated.Value(Dimensions.get('window').height),
    }
  }

  render() {
    let { fadeAnim } = this.state;
    new ReactNativeAD(this.config);
    return (
      <View style={styles.container}>
        <Loading click_login={()=>this.click_login()}/>
        <Animated.View style={{ position: 'absolute', top: fadeAnim }}>
          <ADLoginView 
            authority_host={AUTHORITY}
            context={ReactNativeAD.getContext(CLIENTID)}
            needLogout={this.state.logout}
            hideAfterLogin={true}
            onSuccess={this.onLoginSuccess.bind(this)}
          />
        </Animated.View>
      </View>
    )
  }
  click_login = () => {
    console.log('login button clicked');
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 0.28 * Dimensions.get('window').height,
        duration: 1000
      }
    ).start();
  }
  _storeData = async (token) => {
    try {
      await AsyncStorage.setItem('accessToken', token);
      this.props.navigation.navigate({routeName: 'Home', key: 'Home', params: {user_token: token}});
    } catch (error) {
      alert("Access Token don't save!!!");
    }
  }

  logout(e){
    this.setState({
      logout:true
    })
  }

  onLoginSuccess(cred) {
    console.log("LOGIN SUCCESS: ", cred.access_token);
    this._storeData(cred.access_token);
    // this.props._bootstrapAsync();
    // this.executeApiCall(cred.access_token);
  }

  executeApiCall(access_token) {
    return fetch('https://bitz-network-web-api.azurewebsites.net/api/wallets', {
      headers: {
          "Content-Type": "application/json",
          "Authorization": `bearer ${access_token}`,
      },
      method: "GET",
    })
    .then((response) => {
      if (response.status >= 400) {
          throw new Error(`Status: ${response.status}. Message: ${response.statusText}`);
      }
      if (response.status === 204) {
          return new Promise((resolve, reject) => {
              resolve();
          });
      }
      return response.json();
    })
    .then((result) => {
        console.log("RESULT: ", result)
        return result;
    })
    .catch((error) => {
      throw new Error(`An HTTP error occurred while executing GET request. ${error.message}`);
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

