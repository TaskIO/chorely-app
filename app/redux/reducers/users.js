const defaultState = {
  viewerUser: {},
  viewerUsers: []
};

/* -----------------    ACTION TYPES     ------------------ */
const SET_VIEWER_USER = 'SET_VIEWER_USER';
const SET_VIEWER_USERS = 'SET_VIEWER_USERS'

/* ------------   ACTION CREATORS     ------------------ */

export const setViewerUser = viewerUser => ({
  type: SET_VIEWER_USER,
  viewerUser
});

export const setViewerUsers = viewerUsers => ({
  type: SET_VIEWER_USERS,
  viewerUsers
})

/* ------------       REDUCERS     ------------------ */

export default function(state = defaultState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_VIEWER_USER:
      newState.viewerUser = action.viewerUser;
      break;
    case SET_VIEWER_USERS:
      newState.viewerUsers = action.viewerUsers;
      break;
    default:
      return state;
  }
  return newState;
}

/* ------------       DISPATCHERS     ------------------ */
import {getAllViewerUsersQuery} from '../graphql/group/query.js'

export const fetchViewerUsers = groupId => dispatch => {
  return fetch(`http://192.168.2.12:4000/?${getAllViewerUsersQuery()}`)
    .then(fetchResult => {
      return fetchResult.json()
    })
    .then(jsonData => {
      dispatch(setViewerUsers(jsonData.data.groups[0].users))
    })
    .catch(console.error)
}
