'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import Welcome from '../screens/Welcome'
import CreateAccount from '../screens/CreateAccount'
import Login from '../screens/Login'
import Home from '../screens/Home'
import Group from '../screens/SingleGroup'
import Task from '../screens/SingleTask'
import Profile from '../screens/Profile'
import NewTask from '../screens/NewTask'

const routeConfiguration = {
  Welcome: { screen: Welcome },
  CreateAccount: { screen: CreateAccount },
  Login: { screen: Login },
  Home: { screen: Home },
  Group: { screen: Group },
  Task: { screen: Task },
  Profile: { screen: Profile },
  NewTask: { screen: NewTask }
}

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'Login'
}

export const Navigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
