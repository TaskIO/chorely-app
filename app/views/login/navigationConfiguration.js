'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import Welcome from './components/Welcome'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'
import TabBarNavigation from '../tabBar/components/TabBarNavigation'

const routeConfiguration = {
  Welcome: { screen: Welcome },
  CreateAccount: { screen: CreateAccount },
  Login: { screen: Login },
  TabBarNavigation: {screen: TabBarNavigation}

}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'Welcome'
}

export const NavigatorLogin = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
