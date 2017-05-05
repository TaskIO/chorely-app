'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import HomeTabScreenOne from './components/HomeTabScreenOne'
import HomeTabScreenTwo from './components/HomeTabScreenTwo'

const routeConfiguration = {
  HomeTabScreenOne: { screen: HomeTabScreenOne },
  HomeTabScreenTwo: { screen: HomeTabScreenTwo },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'HomeTabScreenOne'
}

export const NavigatorHomeTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
