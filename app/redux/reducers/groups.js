const defaultState = {
  viewerGroup: {},
  viewerGroups: []
}

/* -----------------    ACTION TYPES     ------------------ */
const SET_VIEWER_GROUPS = 'SET_VIEWER_GROUPS'

/* ------------   ACTION CREATORS     ------------------ */

export const setViewerGroups = (viewerGroups) => ({
  type: SET_VIEWER_GROUPS,
  viewerGroups: viewerGroups
})

/* ------------       REDUCERS     ------------------ */

export default function(state = defaultState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case SET_VIEWER_GROUPS:
      newState.viewerGroups = action.viewerGroups
      break
    default:
      return state
  }
  return newState
}

/* ------------       DISPATCHERS     ------------------ */

import {getAllViewerGroupsQuery} from '../graphql/group/query.js'

export const fetchGroups = () => dispatch => {
  return fetch(`http://192.168.1.47:4000/?${getAllViewerGroupsQuery()}`)
    .then(fetchResult => {
      return fetchResult.json()
    })
    .then(jsonData =>{
      dispatch(setViewerGroups(jsonData.data.groups))
    })
    .catch(console.error)
}
