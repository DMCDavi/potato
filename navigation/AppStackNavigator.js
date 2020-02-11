import { createStackNavigator } from 'react-navigation'

import BottomTabNavigator from './BottomTabNavigator';


const RouteConfigs = {
    
    PranksList: {
        screen: BottomTabNavigator,
        navigationOptions: {
            header: null
        }
    }

}

const TabNavigatorConfig = {
    headerBackTitleVisible: false,
}

const AppStackNavigator = createStackNavigator(RouteConfigs, TabNavigatorConfig)

export default AppStackNavigator