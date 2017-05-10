const SET_SELECTED_USER = 'SET_SELECTED_USER';
const SET_GROUP_USERS = 'SET_GROUP_USERS'

const defaultState = {
  selectedUser: '',
  groupUsers: []
};

export default function(state = defaultState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_SELECTED_USER:
      newState.selectedUser = action.selectedUser;
      break;
    case SET_GROUP_USERS:
      newState.groupUsers = action.groupUsers;
      break;
    default:
      return state;
  }
  return newState;
}

const setSelectedUser = selectedUser => ({
  type: SET_SELECTED_USER,
  selectedUser
});

const setGroupUsers = groupUsers => ({
  type: SET_GROUP_USERS,
  groupUsers
})

export const addSelectedTask = selectedTask => {
  return setSelectedTask(selectedTask);
};

export const fetchGroupUsers = groupId => dispatch => {
  fetch(`http://192.168.2.12:4000/?query=%7Bgroups(id%3A%201)%20%7Bname%20users%7Bid%20name%20email%7D%7D%7D%0A`)
    .then(response => response.json())
    .then(groupUsers => {
      dispatch(setGroupUsers(groupUsers.data.groups[0].users))
    })
    .catch(console.error)
}
