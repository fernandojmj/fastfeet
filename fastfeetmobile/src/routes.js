import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import Login from './pages/Login';
import Delivery from './pages/Delivery';
import Profile from './pages/Profile';

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Login,
        }),
        App: createBottomTabNavigator(
          {
            Delivery,
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#7d40e7',
              inactiveTintColor: '#c7c7c7',
              showIcon: true,

              style: {
                backgroundColor: '#ffff',
              },
            },
          },
        ),
      },
      {
        initialRouteName: userLogged ? 'App' : 'Sign',
      },
    ),
  );

export default Routes;
