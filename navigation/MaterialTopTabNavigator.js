import { createMaterialTopTabNavigator } from 'react-navigation'
import SignUp from '../screens/SignUp'
import SignIn from '../screens/SignIn'

const RouteConfigs = {
    SignIn: {
        name: 'SignIn',
        screen: SignIn,
        navigationOptions: {
            title: 'Entrar',
            header: null
        }
    },
    SignUp: {
        name: 'SignUp',
        screen: SignUp,
        navigationOptions: {
            title: 'Cadastrar-se',
            header: null
        }
    }
}

const TabNavigatorConfig = {
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: '#00FF41',
        inactiveTintColor: '#DDDDDD',
        upperCaseLabel: true,
        style: {
            backgroundColor: '#000',
        },
        labelStyle: {
            textAlign: 'center',
            fontFamily: 'space-mono',
            fontSize: 16,
            fontWeight: '400',
        },
        indicatorStyle: {
            borderBottomColor: '#00FF41',
            borderBottomWidth: 2,
        },
    }
}

const TopTabNavigator = createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig)

export default TopTabNavigator