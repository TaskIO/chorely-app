import { combineReducers } from 'redux'
import { authenticated, tabBar, homeTab, groupTab, taskTab } from './navigation'
import tasks from './tasks'



const reducer = combineReducers({
  authenticated,
  tabBar,
  homeTab,
  groupTab,
  taskTab,
  tasks
})

export default reducer
