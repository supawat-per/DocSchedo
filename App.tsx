import React from 'react';
import { Button, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from './screens/Colors';

import AuthLoadingScreen from "./screens/AuthLoadingScreen";

import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeRootScreen from "./screens/HomeRoot";

function ICONMaterialCommunityIcons(props) {
  return (
    <MaterialCommunityIcons 
      name={props.name}
      size={35}
      style={{ marginRight: 15 }}
      color="#FFFFFF"
    />
  );
}

const AuthStack = createStackNavigator(
  {
    Landing: {
      screen: LandingScreen,
      navigationOptions: () => ({
        headerBackTitle: null,
        header: null,
      }),
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        headerBackTitle: null,
        header: null,
      }),
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: () => ({
        headerBackTitle: null,
        header: null,
      }),
    },
  },
);

const AppStack = createStackNavigator(
  {
    HomeRoot: {
      screen: HomeRootScreen,
      navigationOptions: () => ({
        title: 'DocSchedo',
        headerTitleStyle: {
          textAlign: 'center',
          alignSelf: 'center',
          color:"#FFFFFF",
          fontSize: 28,
        },
        headerTitle: 'DocSchedo',
        headerLeft: <View style={{padding:6}}></View>, 
        headerRight: <ICONMaterialCommunityIcons name='chat'/>,
        headerBackTitle: null,
        headerStyle: {
          backgroundColor: '#2f95dc',
        }
      }),
    },
  }, {headerLayoutPreset: 'center'}
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}