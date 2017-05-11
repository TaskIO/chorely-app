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
