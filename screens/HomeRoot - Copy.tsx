import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from "./Home/HomeScreen";
import AppointmentScreen from "./Appointment/AppointmentScreen";
import NotificationScreen from "./Notification/NotificationScreen";
import ProfileScreen from "./Profile/ProfileScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Appointment: { screen: AppointmentScreen },
    Notification: { screen: NotificationScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    tabBarOptions: {
      activeTintColor: '#7FB4FE',
      inactiveTintColor: '#C6C6C6',
    },
  }
);

export default createAppContainer(TabNavigator);