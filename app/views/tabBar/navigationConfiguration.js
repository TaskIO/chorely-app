'use strict'
import { TabNavigator, TabBarBottom } from 'react-navigation'
// Tab-Navigators
import HomeTabNavigation from '../homeTab/components/HomeTabNavigation'
import GroupTabNavigation from '../groupTab/components/GroupTabNavigation'
import TaskTabNavigation from '../taskTab/components/TaskTabNavigation'


const routeConfiguration = {
  HomeTabNavigation: { screen: HomeTabNavigation },
  GroupTabNavigation: { screen: GroupTabNavigation },
  TaskTabNavigation: { screen: TaskTabNavigation },
}

const tabBarConfiguration = {
  //...other configs
  tabBarPosition: 'bottom',
  tabBarComponent: TabBarBottom,
  tabBarOptions: {
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: 'blue',
  // background color is for the tab component
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
  }
}

export const NavigatorTabBar = TabNavigator(routeConfiguration, tabBarConfiguration)
