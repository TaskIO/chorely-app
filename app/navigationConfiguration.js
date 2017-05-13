'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import Welcome from './views/screens/Welcome'
import CreateAccount from './views/screens/CreateAccount'
import Login from './views/screens/Login'
import Home from './views/screens/Home'
import Group from './views/screens/SingleGroup'
import Task from './views/screens/SingleTask'
import Profile from './views/screens/Profile'

const routeConfiguration = {
  Home: { screen: Home },
  Welcome: { screen: Welcome },
  CreateAccount: { screen: CreateAccount },
  Login: { screen: Login },
  Group: { screen: Group },
  Task: { screen: Task },
  Profile: { screen: Profile },
}

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'Login'
}

export const Navigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
