'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import Welcome from './components/Welcome'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'
import Home from '../homeTab/components/Home'
import Group from '../groupTab/components/SingleGroup'
import Task from '../groupTab/components/SingleTask'

const routeConfiguration = {
  Welcome: { screen: Welcome },
  CreateAccount: { screen: CreateAccount },
  Login: { screen: Login },
  Home: { screen: Home },
  Group: { screen: Group },
  Task: { screen: Task },

}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'Welcome'
}

export const NavigatorLogin = StackNavigator(routeConfiguration, stackNavigatorConfiguration)
