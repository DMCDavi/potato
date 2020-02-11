import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppStackNavigator from './AppStackNavigator';
import TopTabNavigator from './MaterialTopTabNavigator';
import BottomTabNavigator from './BottomTabNavigator';

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: TopTabNavigator,
    Stack: AppStackNavigator,
    Bottom: BottomTabNavigator,
  },{
    initialRouteName: 'Main'
  })
);