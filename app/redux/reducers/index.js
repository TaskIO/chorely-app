import { combineReducers } from 'redux'
import { authenticated, tabBar, homeTab, groupTab, taskTab, userTab } from './navigation'
import tasks from './tasks'
import users from './users'
import groups from './groups'



const reducer = combineReducers({
  authenticated,
  groups,
  groupTab,
  homeTab,
  tabBar,
  tasks,
  taskTab,
  users,
  userTab,
})

export default reducer
