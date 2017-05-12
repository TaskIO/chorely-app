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
    case SET_VIEWER_GROUP:
      newState.viewerGroup = action.viewerGroup
      break
    default:
      return state
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */
import { getAllViewerGroupsQuery, getViewerGroupQuery } from '../graphql/group/query.js'
import { setGroupUsers } from './users'
import { setGroupTasks } from './tasks'

export const selectGroup = (group) => dispatch => {
  dispatch(setViewerGroup(group))
  dispatch(setGroupUsers(group.users))
  dispatch(setGroupTasks(group.tasks))
}

export const fetchGroups = () => dispatch => {
  return fetch(`http://192.168.1.15:4000?${getAllViewerGroupsQuery()}`)
    .then(fetchResult => {
      return fetchResult.json()
    })
    .then(jsonData => {
      dispatch(setViewerGroups(jsonData.data.groups))
    })
    .catch(console.error)
}

export const fetchGroup = groupId => dispatch => {
  return fetch(`http://192.168.1.15:4000/?${getViewerGroupQuery(groupId)}`)
    .then(fetchResult => {
      return fetchResult.json()
    })
    .then(jsonData => {
      dispatch(setViewerGroup(jsonData.data.groups[0]))
    })
    .catch(console.error)
}
