'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import SingleGroup from './components/SingleGroup'

const routeConfiguration = {
  SingleGroup: { screen: SingleGroup },
}
// going to disable the header for now

const stackNavigatorConfiguration = {
  headerMode: 'float',
  initialRoute: 'SingleGroup'
}

export const NavigatorGroupTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
