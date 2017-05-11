'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import SingleGroup from './components/SingleGroup'
import SingleTask from './components/SingleTask'

const routeConfiguration = {
  SingleGroup: { screen: SingleGroup },
  SingleTask: { screen: SingleTask }
}
// going to disable the header for now

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'SingleGroup'
}

export const NavigatorGroupTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
