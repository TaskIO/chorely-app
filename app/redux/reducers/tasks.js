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

import {createNewTaskWithBounty, associateTaskAndBounty, createNewBounty, completeTask} from '../graphql/task/mutation.js'

// dev constants
import { ipAddress, port} from '../../../constants/dev'

export const createNewTask = taskData => dispatch => {
  let {description, groupId, creatorId, amount} = taskData
  return fetch(`http://${ipAddress}:${port}/?${createNewTaskWithBounty(description, groupId, creatorId, amount)}`, { method: 'POST'})
    .then(response => response.json())
    .then(createdTaskAndBounty => {
      const taskId = createdTaskAndBounty.data.tasksCreate.id
      const bountyId = createdTaskAndBounty.data.bountiesCreate.id
      dispatch(setSelectedTask(createdTaskAndBounty.data.tasksCreate))
      fetch(`http://${ipAddress}:${port}/?${associateTaskAndBounty(taskId, bountyId)}`, { method: 'POST'})
      return createdTaskAndBounty
    })
    .catch(console.error)
}

export const addBountyToTask = (amount, userId, taskId) => dispatch => {
  return fetch(`http://${ipAddress}:${port}/?${createNewBounty(amount, userId)}`, { method: 'POST' })
    .then(response => response.json())
    .then(createdBounty => {
      const bountyId = createdBounty.data.bountiesCreate.id
      fetch(`http://${ipAddress}:${port}/?${associateTaskAndBounty(taskId, bountyId)}`, { method: 'POST' })
      return createdBounty
    })
    .catch(console.error)
}

export const taskStatusComplete = taskId => dispatch => {
  return fetch(`http://${ipAddress}:${port}/?${completeTask(taskId)}`, { method: 'POST' })
    .then(completedTask => {
    })
    .catch(console.error)
}
