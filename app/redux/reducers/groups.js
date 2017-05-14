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

import { createSingleGroup, associateUserAndGroup } from '../graphql/group/mutation'
import { getAllViewerGroupsQuery, getViewerGroupQuery } from '../graphql/group/query'
import { setGroupUsers } from './users'
import { setGroupTasks } from './tasks'
import { getGroup } from '../graphql/group/query'

// dev constants
import { ipAddress, port} from '../../../constants/dev'

export const selectGroup = groupId => dispatch => {
  fetch(`http://${ipAddress}:${port}/?${getGroup(+groupId)}`)
    .then(response => response.json())
    .then(selectedGroup => {
      const group = selectedGroup.data.groups[0]
      dispatch(setViewerGroup(group))
      dispatch(setGroupUsers(group.users))
      dispatch(setGroupTasks(group.tasks))
    })
    .catch(console.error)
}

export const createNewGroup = (name, description, userId) => dispatch => {
   fetch(`http://${ipAddress}:${port}/?${createSingleGroup(name, description)}`, { method: 'POST'})
  .then(response => response.json())
  .then(createdNewGroup => {
    console.log(createdNewGroup);
    const groupId = createdNewGroup.data.groupsCreate.id
    return fetch(`http://${ipAddress}:${port}/?${associateUserAndGroup(userId, groupId)}`, { method: 'POST'})
  })
  .catch(console.error)
}
