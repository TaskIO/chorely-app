const SET_SELECTED_TASK = 'SET_SELECTED_TASK';
const SET_BOUNTY = 'SET_BOUNTY';

const defaultState = {
  selectedTask: '',
  bountyAmount: ''
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

export const addSelectedTask = selectedTask => {
  return setSelectedTask(selectedTask);
};

export const addBounty = addBounty => {
  return setBounty(addBounty);
};
