'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import Login from './components/Login'
import Home from './components/Home'

const routeConfiguration = {
  Login: { screen: Login },
  Home: { screen: Home },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'float',
  initialRouteName: 'Login'
}

export const NavigatorHomeTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
