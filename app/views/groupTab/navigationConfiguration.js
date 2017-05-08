'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import GroupTabScreenOne from './components/GroupTabScreenOne'
import GroupTabScreenTwo from './components/GroupTabScreenTwo'

const routeConfiguration = {
  GroupTabScreenOne: { screen: GroupTabScreenOne },
  GroupTabScreenTwo: { screen: GroupTabScreenTwo },
}
// going to disable the header for now

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'GroupTabScreenOne'
}

export const NavigatorGroupTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
