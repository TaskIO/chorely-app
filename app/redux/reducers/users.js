const defaultState = {
  viewerUser: {},
  groupUsers: []
};

/* -----------------    ACTION TYPES     ------------------ */
const SET_VIEWER_USER = 'SET_VIEWER_USER';
const SET_GROUP_USERS = 'SET_GROUP_USERS'

/* ------------   ACTION CREATORS     ------------------ */

export const setViewerUser = viewerUser => ({
  type: SET_VIEWER_USER,
  viewerUser
});

export const setGroupUsers = groupUsers => ({
  type: SET_GROUP_USERS,
  groupUsers
})

/* ------------       REDUCERS     ------------------ */

export default function(state = defaultState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_VIEWER_USER:
      newState.viewerUser = action.viewerUser;
      break;
    case SET_GROUP_USERS:
      newState.groupUsers = action.groupUsers;
      break;
    default:
      return state;
  }
  return newState;
}

/* ------------       DISPATCHERS     ------------------ */
import {getAllGroupUsersQuery} from '../graphql/group/query.js'

export const fetchGroupUsers = groupId => dispatch => {
  return fetch(`http://192.168.2.12:4000/?${getAllGroupUsersQuery()}`)
    .then(fetchResult => {
      return fetchResult.json()
    })
    .then(jsonData => {
      dispatch(setGroupUsers(jsonData.data.groups[0].users))
    })
    .catch(console.error)
}
