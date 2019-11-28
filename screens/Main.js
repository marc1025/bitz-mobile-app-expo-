import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigation from '../navigation/MainTabNavigator';

import AuthLoadingScreen from './AuthLoadingScreen';
import Logo from './welcome/Logo';
import LoginScreen from './welcome/LoginScreen';

import HomeScreen from './HomeScreen';
import LinksScreen from './LinksScreen';
import SettingsScreen from './SettingsScreen';


// const AppStack = createStackNavigator({ Home: HomeScreen, Links: LinksScreen, Settings: SettingsScreen });
// const AuthStack = createStackNavigator({ SignIn: AuthScreen });
const AppStack = createStackNavigator(
  { 
    Home: {screen: HomeScreen},
    Links: {screen: LinksScreen},
    Settings: {screen: SettingsScreen} 
  },
  {
    navigationOptions:{header:null}
  }
);

const LoginStack = createStackNavigator(
  { 
    Logo: {screen: Logo},
    SignIn: {screen: LoginScreen},
  },
  {
    navigationOptions:{header:null}
  }
);
export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: LoginStack,
  },
  {
    initialRouteName: 'Auth',
  }
);