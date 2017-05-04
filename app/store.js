'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'

// Navigation
import { NavigatorHomeTab } from './homeTab/navigationConfiguration'
import { NavigatorGroupTab } from './groupTab/navigationConfiguration'
import { NavigatorTaskTab } from './taskTab/navigationConfiguration'
import { TabBar, tabBarReducer } from './tabBar/navigationConfiguration'

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
