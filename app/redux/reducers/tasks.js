const SET_SELECTED_TASK = 'SET_SELECTED_TASK'
const SET_GROUP_TASKS = 'SET_GROUP_TASKS'

const defaultState = {
  selectedTask: {},
  groupTasks: []
};

export default function(state = defaultState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_SELECTED_TASK:
      newState.selectedTask = action.selectedTask;
      break;
    case SET_GROUP_TASKS:
      newState.groupTasks = action.groupTasks;
      break;
    default:
      return state;
  }
  console.log('TASKS STATE', newState)
  return newState;
}

const setSelectedTask = selectedTask => ({
  type: SET_SELECTED_TASK,
  selectedTask
});

const setGroupTasks = groupTasks => ({
  type: SET_GROUP_TASKS,
  groupTasks
})

import { getGroupTasksWithBounties } from '../graphql/task/query'

export const addSelectedTask = selectedTask => {
  return setSelectedTask(selectedTask);
};

export const fetchGroupTasks = groupId => dispatch => {
  fetch(`http://192.168.2.8:4000/?${getGroupTasksWithBounties(groupId)}`)
    .then(response => response.json())
    .then(groupTasks => {
      dispatch(setGroupTasks(groupTasks.data.groups[0].tasks))
    })
    .catch(console.error)
}


