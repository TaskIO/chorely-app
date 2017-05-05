'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import TaskForm from './components/TaskForm'
import BountyForm from './components/BountyForm'
import TaskTabScreenThree from './components/TaskTabScreenThree'

const routeConfiguration = {
  TaskForm: { screen: TaskForm },
  BountyForm: { screen: BountyForm },
  TaskTabScreenThree: { screen: TaskTabScreenThree },

}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'TaskForm'
}

export const NavigatorTaskTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
