const defaultState = {
  viewerGroup: {},
  viewerGroups: []
}

/* -----------------    ACTION TYPES     ------------------ */
const SET_VIEWER_GROUP = 'SET_VIEWER_GROUP'
const SET_VIEWER_GROUPS = 'SET_VIEWER_GROUPS'
const ADD_VIEWER_GROUP = 'ADD_VIEWER_GROUP'


/* ------------   ACTION CREATORS     ------------------ */

export const setViewerGroup = (viewerGroup) => ({
  type: SET_VIEWER_GROUP,
  viewerGroup: viewerGroup
})

export const setViewerGroups = (viewerGroups) => ({
  type: SET_VIEWER_GROUPS,
  viewerGroups: viewerGroups
})

export const addViewerGroup = (viewerGroup) => ({
  type: ADD_VIEWER_GROUP,
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
    case ADD_VIEWER_GROUP:
      newState.viewerGroups = newState.viewerGroups.concat(action.viewerGroup)
      break
    default:
      return state
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */

// GraphQL queries and mutations
import { createSingleGroup, associateUserAndGroup } from '../graphql/group/mutation'
import { getAllViewerGroupsQuery, getViewerGroupQuery } from '../graphql/group/query'
import { getGroup } from '../graphql/group/query'

// action creators or dispatchers
import { setGroupTasks } from './tasks'
import { setGroupUsers } from './users'

// dev constants
import { ipAddress, port } from '../../../constants/dev'

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

export const createNewGroup = groupData => dispatch => {
  const { name, description, icon, viewerId } = groupData

  return fetch(`http://${ipAddress}:${port}/?${createSingleGroup(name, description, icon)}`, { method: 'POST' })
    .then(response => (response.json()))
    .then(createdNewGroup => {
      const group = createdNewGroup.data.groupsCreate
      dispatch(addViewerGroup(group))
      return fetch(`http://${ipAddress}:${port}/?${associateUserAndGroup(viewerId, group.id)}`, { method: 'POST' })
    })
    .catch(console.error)
}
