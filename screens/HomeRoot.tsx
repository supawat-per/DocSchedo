import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import Colors from './Colors';

import HomeScreen from "./Home/HomeScreen";
import AppointmentScreen from "./Appointment/AppointmentScreen";
import NotificationScreen from "./Notification/NotificationScreen";
import ProfileScreen from "./Profile/ProfileScreen";

function TabBarFontAwesomeIcon(props) {
  return (
    <FontAwesomeIcon 
      name={props.name}
      size={24}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}

function TabBarIoniconsIcon(props) {
  return (
    <IoniconsIcon 
      name={props.name}
      size={32}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}

function TabBarEntypoIcon(props) {
  return (
    <EntypoIcon 
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
          <TabBarEntypoIcon
            focused={focused}
            name='home'
          />
        ),
      }),
    },
    Appointment: { 
      screen: AppointmentScreen,
      navigationOptions: () => ({
        tabBarLabel: 'Appointment',
        tabBarIcon: ({ focused }) => (
          <TabBarIoniconsIcon
            focused={focused}
            name='ios-calendar'
          />
        ),
      }),
    },
    Notification: { 
      screen: NotificationScreen,
      navigationOptions: () => ({
        tabBarLabel: 'Notification',
        tabBarIcon: ({ focused }) => (
          <TabBarIoniconsIcon
            focused={focused}
            name='ios-notifications'
          />
        ),
      }),
    },
    Profile: { 
      screen: ProfileScreen,
      navigationOptions: () => ({
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused }) => (
          <TabBarFontAwesomeIcon
            focused={focused}
            name='user-circle-o'
          />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#406BBB',
      inactiveTintColor: '#C6C6C6',
    },
  }
);

export default createAppContainer(TabNavigator);