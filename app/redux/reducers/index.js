import { combineReducers } from 'redux'
import { authenticated, tabBar, homeTab, groupTab, taskTab, userTab } from './navigation'
import tasks from './tasks'
import users from './users'



const reducer = combineReducers({
  authenticated,
  groupTab,
  homeTab,
  tabBar,
  tasks,
  taskTab,
  userTab,
  users
})

export default reducer
