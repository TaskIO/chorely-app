'use strict'
import { TabNavigator } from 'react-navigation'
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
    console.log("action", action);
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index:action.payload.index }
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}
