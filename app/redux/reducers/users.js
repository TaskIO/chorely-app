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
import { getAllGroupUsersQuery } from '../graphql/group/query.js'
import { postCreateAccountMutation } from '../graphql/viewer/mutation.js'
import { getViewer } from '../graphql/viewer/query.js'
import { setViewerGroups } from './groups'

// dev constants
import { ipAddress, port} from '../../../constants/dev'

export const createAccount = user => dispatch => {
  return fetch(`http://${ipAddress}:${port}/?`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "query": `${postCreateAccountMutation(user)}`,
      })
    })
    .then(fetchResult => {
      return fetchResult.json()
    })
    .then(jsonResult => {
      dispatch(setViewerUser(jsonResult.data.usersCreate))
    })
    .catch(console.error)
}

export const fetchViewer = user => dispatch => {
  return fetch(`http://${ipAddress}:${port}/?${getViewer(user.email)}`)
    .then(fetchResult => {
      return fetchResult.json()
    })
    .then(jsonResult => {
      const viewerUser = jsonResult.data.users[0]
      const viewerGroups = viewerUser.groups
      dispatch(setViewerUser(viewerUser))
      dispatch(setViewerGroups(viewerGroups))
    })
    .catch(console.error)
}
