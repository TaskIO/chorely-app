'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'

// Navigation
import { NavigatorHomeTab } from '../tabs/homeTab/navigationConfiguration'
import { NavigatorGroupTab } from '../tabs/groupTab/navigationConfiguration'
import { NavigatorTaskTab } from '../tabs/taskTab/navigationConfiguration'
import { TabBar, tabBarReducer } from '../tabs/tabBar/navigationConfiguration'

// Middleware
const middleware = () => {
  return applyMiddleware(createLogger())
}

export default createStore(
  combineReducers({
    tabBar: tabBarReducer,

    homeTab: (state, action) => NavigatorHomeTab.router.getStateForAction(action, state),

    groupTab: (state, action) => NavigatorGroupTab.router.getStateForAction(action, state),

    taskTab: (state, action) => NavigatorTaskTab.router.getStateForAction(action, state),
  }),
  middleware(),
)
