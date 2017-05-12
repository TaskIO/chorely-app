const defaultState = {
  groupTasks: [],
  selectedTask: {}
}

/* -----------------    ACTION TYPES     ------------------ */
const SET_GROUP_TASKS = 'SET_GROUP_TASKS'
const SET_SELECTED_TASK = 'SET_SELECTED_TASK'

/* ------------   ACTION CREATORS     ------------------ */

export const setGroupTasks = groupTasks => ({
  type: SET_GROUP_TASKS,
  groupTasks
})

export const setSelectedTask = selectedTask => ({
  type: SET_SELECTED_TASK,
  selectedTask
})

/* ------------       REDUCERS     ------------------ */

export default function(state = defaultState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case SET_GROUP_TASKS:
      newState.groupTasks = action.groupTasks
      break
    case SET_SELECTED_TASK:
      newState.selectedTask = action.selectedTask
      break
    default:
      return state
  }
  return newState
}
/* ------------       DISPATCHERS     ------------------ */

import {createNewTaskWithBounty, associateTaskAndBounty, createNewBounty} from '../graphql/task/mutation.js'

// dev constants
import { ipAddress, port} from '../../../constants/dev'

export const addSelectedTask = selectedTask => {
  return setSelectedTask(selectedTask)
}

export const createNewTask = (description, groupId, creatorId, amount) => dispatch => {
  fetch(`http://${ipAddress}:${port}/?${createNewTaskWithBounty(description, groupId, creatorId, amount)}`, { method: 'POST'})
    .then(response => response.json())
    .then(createdTaskAndBounty => {
      const taskId = createdTaskAndBounty.data.tasksCreate.id
      const bountyId = createdTaskAndBounty.data.bountiesCreate.id
      dispatch(setSelectedTask(createdTaskAndBounty.data.tasksCreate))
      return fetch(`http://${ipAddress}:${port}/?${associateTaskAndBounty(taskId, bountyId)}`, { method: 'POST'})
    })
    .catch(console.error)
}

export const addBountyToTask = (amount, userId, taskId) => dispatch => {
  fetch(`http://${ipAddress}:${port}/?${createNewBounty(amount, userId)}`, { method: 'POST' })
    .then(response => response.json())
    .then(createdBounty => {
      const bountyId = createdBounty.data.bountiesCreate.id
      return fetch(`http://${ipAddress}:${port}/?${associateTaskAndBounty(taskId, bountyId)}`, { method: 'POST' })
    })
    .catch(console.error)
}
