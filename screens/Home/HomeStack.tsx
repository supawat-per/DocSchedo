import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from "./HomeScreen";
import ChatScreen from "../Chat/ChatScreen";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerBackTitle: null,
        header: null,
      }),
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: () => ({
        title: 'DocSchedo',
        headerBackTitle: null,
        headerStyle: {
          backgroundColor: '#2AE5FF',
        },
      }),
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}