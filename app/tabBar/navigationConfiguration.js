'use strict'
import { TabNavigator } from 'react-navigation'
// Tab-Navigators
import HomeTabNavigation from '../homeTab/views/HomeTabNavigation'
import GroupTabNavigation from '../groupTab/views/GroupTabNavigation'
import TaskTabNavigation from '../taskTab/views/TaskTabNavigation'


const routeConfiguration = {
  HomeTabNavigation: { screen: HomeTabNavigation },
  GroupTabNavigation: { screen: GroupTabNavigation },
  TaskTabNavigation: { screen: TaskTabNavigation },
}

const tabBarConfiguration = {
  //...other configs
tabBarOptions:{
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: 'blue',
// background color is for the tab component
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
  }
}

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)

export const tabBarReducer = (state,action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index:0 }
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}
