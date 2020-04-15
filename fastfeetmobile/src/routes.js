import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Delivery from './pages/Delivery';

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login,
        Delivery,
      },
      {
        initialRouteName: userLogged ? 'Delivery' : 'Login',
      },
    ),
  );

export default Routes;
