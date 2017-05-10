import { combineReducers } from 'redux'
import { authenticated, tabBar, homeTab, groupTab, taskTab, userTab } from './navigation'
import tasks from './tasks'
import groups from './groups'



const reducer = combineReducers({
  authenticated,
  groups,
  groupTab,
  homeTab,
  tabBar,
  tasks,
  taskTab,
  userTab,
})

export default reducer
