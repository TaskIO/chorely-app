import { combineReducers } from 'redux'
import { authenticated, tabBar, homeTab, groupTab, taskTab, userTab } from './navigation'
import tasks from './tasks'



const reducer = combineReducers({
  authenticated,
  groupTab,
  homeTab,
  tabBar,
  tasks,
  taskTab,
  userTab,
})

export default reducer
