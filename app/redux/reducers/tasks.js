const SET_SELECTED_TASK = 'SET_SELECTED_TASK';
const SET_BOUNTY = 'SET_BOUNTY';
const SET_GROUP_TASKS = 'SET_GROUP_TASKS'

const defaultState = {
  selectedTask: '',
  bountyAmount: '',
  groupTasks: []
};

export default function(state = defaultState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_SELECTED_TASK:
      newState.selectedTask = action.selectedTask;
      break;
    case SET_BOUNTY:
      newState.setBounty = action.setBounty;
      break;
    case SET_GROUP_TASKS:
      newState.groupTasks = action.groupTasks;
      break;
    default:
      return state;
  }
  return newState;
}

const setSelectedTask = selectedTask => ({
  type: SET_SELECTED_TASK,
  selectedTask
});

const setBounty = setBounty => ({
  type: SET_BOUNTY,
  setBounty
});

const setGroupTasks = groupTasks => ({
  type: SET_GROUP_TASKS,
  groupTasks
})

export const addSelectedTask = selectedTask => {
  return setSelectedTask(selectedTask);
};

export const addBounty = addBounty => {
  return setBounty(addBounty);
};

export const fetchGroupTasks = groupId => dispatch => {
  fetch(`http://192.168.2.8:4000/?query=query%7Bgroups(id%3A%20${groupId})%7Btasks%7Bid%20description%20status%7D%7D%7D%0A`)
    .then(response => response.json())
    .then(groupTasks => {
      dispatch(setGroupTasks(groupTasks.data.groups[0].tasks))
    })
    .catch(console.error)
}
