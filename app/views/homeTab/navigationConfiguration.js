'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import Home from './components/Home'

const routeConfiguration = {
  Home: { screen: Home },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'Home'
}

export const NavigatorHomeTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
