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

export const fetchGroups = () => dispatch => {
  return fetch('http://192.168.1.47:4000/?query=%7B%0A%20%20groups%20%7B%0A%20%20%20%20name%0A%20%20%20%20id%0A%20%20%7D%0A%7D%0A')
    .then(fetchResult => {
      return fetchResult.json()
    })
    .then(jsonData =>{
      dispatch(setGroups(jsonData.data.groups))
    })
    .catch(console.error)
}
