const SET_SELECTED_TASK = 'SET_SELECTED_TASK'

const defaultState = {
  selectedTask: {}
}

export default function(state = defaultState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case SET_SELECTED_TASK:
      newState.selectedTask = action.selectedTask
      break
    default:
      return state
  }
  return newState
}

const setSelectedTask = selectedTask => ({
  type: SET_SELECTED_TASK, selectedTask
})

export const addSelectedTask = selectedTask => {
  return setSelectedTask(selectedTask)
}
