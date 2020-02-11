import PranksList from '../screens/PranksList'
import UsersList from '../screens/UsersList'
import RoyaltyScreen from '../screens/RoyaltyScreen'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const RouteConfigs = {
    PranksList: {
        screen: PranksList,
        navigationOptions: {
            title: '',
            tabBarIcon: ({ tintColor, focused }) =>
                <Icon name="format-list-checks" size={focused ? 26 : 24} color={tintColor} />
        }
    },
    UsersList: {
        screen: UsersList,
        navigationOptions: {
            title: '',
            tabBarIcon: ({ tintColor, focused }) =>
                <Icon name="account-group" size={focused ? 26 : 24} color={tintColor} />
        }
    },
    RoyaltyScreen: {
        screen: RoyaltyScreen,
        navigationOptions: {
            title: '',
            tabBarIcon: ({ tintColor, focused }) =>
                <Icon name="crown" size={focused ? 26 : 24} color={tintColor} />
        }
    },

}

const TabNavigatorConfig = {
    initialRouteName: 'PranksList',
    activeColor: '#00FF41',
    barStyle: {
        backgroundColor: '#000',
        borderColor: "#00FF41",
        borderTopWidth: 1,
        borderTopColor: "#00FF41"
    }
}

const BottomTabNavigator = createMaterialBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default BottomTabNavigator