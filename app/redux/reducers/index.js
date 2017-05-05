import { combineReducers } from 'redux'
import tasks from './tasks'

// Navigation
import { NavigatorHomeTab } from '../../tabs/homeTab/navigationConfiguration'
import { NavigatorGroupTab } from '../../tabs/groupTab/navigationConfiguration'
import { NavigatorTaskTab } from '../../tabs/taskTab/navigationConfiguration'
import { TabBar, tabBarReducer } from '../../tabs/tabBar/navigationConfiguration'

  const reducer = combineReducers({
    tabBar: tabBarReducer,

    homeTab: (state, action) => NavigatorHomeTab.router.getStateForAction(action, state),

    groupTab: (state, action) => NavigatorGroupTab.router.getStateForAction(action, state),

    taskTab: (state, action) => NavigatorTaskTab.router.getStateForAction(action, state),
    tasks: tasks
  })

export default reducer
