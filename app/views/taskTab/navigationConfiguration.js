'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import NewTask from './components/NewTask'
import BountyForm from './components/BountyForm'
import TaskTabScreenThree from './components/TaskTabScreenThree'

const routeConfiguration = {
  NewTask: { screen: NewTask },
  BountyForm: { screen: BountyForm },
  TaskTabScreenThree: { screen: TaskTabScreenThree },

}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'NewTask'
}

export const NavigatorTaskTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
