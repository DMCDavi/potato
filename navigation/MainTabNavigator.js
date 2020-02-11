import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor, focused }) =>
    <Icon name="format-list-checks" size={focused ? 26 : 24} color={tintColor} />,
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ tintColor, focused }) =>
    <Icon name="account-group" size={focused ? 26 : 24} color={tintColor} />,
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ tintColor, focused }) =>
    <Icon name="crown" size={focused ? 26 : 24} color={tintColor} />,
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
},
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: "#00FF41",
      indicatorStyle: {
        height: 2,
        backgroundColor: "#fff"
      },
      style: {
        backgroundColor: '#000',
        borderColor: "#00FF41",
        borderTopWidth: 1,
        borderTopColor: "#00FF41"
      }
    }
  });

tabNavigator.path = '';

export default tabNavigator;
