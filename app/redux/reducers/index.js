import { combineReducers } from 'redux'
import { authenticated, homeTab, groupTab, taskTab, userTab } from './navigation'
import tasks from './tasks'
import users from './users'
import groups from './groups'
import polls from './polls'



const reducer = combineReducers({
  authenticated,
  groups,
  tasks,
  users,
  polls,
})

export default reducer
