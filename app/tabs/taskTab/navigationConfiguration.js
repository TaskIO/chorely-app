'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import TaskTabScreenOne from './components/TaskTabScreenOne'
import TaskTabScreenTwo from './components/TaskTabScreenTwo'
import TaskTabScreenThree from './components/TaskTabScreenThree'

const routeConfiguration = {
  TaskTabScreenOne: { screen: TaskTabScreenOne },
  TaskTabScreenTwo: { screen: TaskTabScreenTwo },
  TaskTabScreenThree: { screen: TaskTabScreenThree },

}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'TaskTabScreenOne'
}

export const NavigatorTaskTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
