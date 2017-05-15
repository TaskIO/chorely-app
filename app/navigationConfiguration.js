'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import Welcome from './views/screens/Welcome'
import CreateAccount from './views/screens/CreateAccount'
import Login from './views/screens/Login'
import Home from './views/screens/Home'
import GroupTasks from './views/screens/GroupTasks'
import CompleteTask from './views/screens/CompleteTask'
import ActiveTask from './views/screens/ActiveTask'
import PendingTask from './views/screens/PendingTask'
import Profile from './views/screens/Profile'
import NewTask from './views/screens/NewTask'
import NewGroup from './views/screens/NewGroup'

const routeConfiguration = {
  Welcome: { screen: Welcome },
  Login: { screen: Login },
  CreateAccount: { screen: CreateAccount },
  Home: { screen: Home },
  NewGroup: { screen: NewGroup },
  GroupTasks: { screen: GroupTasks },
  NewTask: { screen: NewTask },
  CompleteTask: { screen: CompleteTask },
  ActiveTask: { screen: ActiveTask },
  PendingTask: { screen: PendingTask },
  Profile: { screen: Profile },
}

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'Login'
}

export const Navigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
