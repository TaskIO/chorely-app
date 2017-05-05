import { combineReducers } from 'redux'
import { tabBar, homeTab, groupTab, taskTab } from './navigation'
import tasks from './tasks'



const reducer = combineReducers({
  tabBar,
  homeTab,
  groupTab,
  taskTab,
  tasks
})

export default reducer
