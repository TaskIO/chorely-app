const defaultState = {
  viewerGroup: {},
  viewerGroups: []
}

/* -----------------    ACTION TYPES     ------------------ */
const SET_VIEWER_GROUPS = 'SET_VIEWER_GROUPS'
const SET_VIEWER_GROUP = 'SET_VIEWER_GROUP'

/* ------------   ACTION CREATORS     ------------------ */

export const setViewerGroups = (viewerGroups) => ({
  type: SET_VIEWER_GROUPS,
  viewerGroups: viewerGroups
})

export const setViewerGroup = (viewerGroup) => ({
  type: SET_VIEWER_GROUP,
  viewerGroup: viewerGroup
})

/* ------------       REDUCERS     ------------------ */

export default function(state = defaultState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case SET_VIEWER_GROUP:
      newState.viewerGroup = action.viewerGroup
      break
    case SET_VIEWER_GROUPS:
      newState.viewerGroups = action.viewerGroups
      break
    default:
      return state
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */
import { createSingleGroup } from '../graphql/group/mutation'
import { getAllViewerGroupsQuery, getViewerGroupQuery } from '../graphql/group/query'
import { setGroupUsers } from './users'
import { setGroupTasks } from './tasks'

// dev constants
import { ipAddress, port} from '../../../constants/dev'

export const selectGroup = (group) => dispatch => {
  dispatch(setViewerGroup(group))
  dispatch(setGroupUsers(group.users))
  dispatch(setGroupTasks(group.tasks))
}

export const createNewGroup = (name, description) => dispatch => {
  fetch(`http://${ipAddress}:${port}/?${createSingleGroup(name, description)}`, { method: 'POST'})
    .then(response => response.json())
    .then(createdNewGroup => {
      const groupId = createdNewGroup.data.groupsCreate.id
      dispatch(setSelectedTask(createdNewGroup.data.tasksCreate))
      return fetch(`http://${ipAddress}:${port}/?${associateTaskAndBounty(userId, groupId)}`, { method: 'POST'})
    })
    .catch(console.error)
}

export const fetchGroups = () => dispatch => {
  return fetch(`http://${ipAddress}:${port}?${getAllViewerGroupsQuery()}`)
    .then(fetchResult => {
      return fetchResult.json()
    })
    .then(jsonData => {
      dispatch(setViewerGroups(jsonData.data.groups))
    })
    .catch(console.error)
}

export const fetchGroup = groupId => dispatch => {
  return fetch(`http://${ipAddress}:${port}/?${getViewerGroupQuery(groupId)}`)
    .then(fetchResult => {
      return fetchResult.json()
    })
    .then(jsonData => {
      dispatch(setViewerGroup(jsonData.data.groups[0]))
    })
    .catch(console.error)
}
