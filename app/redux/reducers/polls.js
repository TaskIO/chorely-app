const defaultState = {
  groupInterval: -1,
}

/* -----------------    ACTION TYPES     ------------------ */
const SET_GROUP_INTERVAL = 'SET_GROUP_INTERVAL'


/* ------------   ACTION CREATORS     ------------------ */

export const setGroupInterval = groupInterval => ({
  type: SET_GROUP_INTERVAL,
  groupInterval
})

/* ------------       REDUCERS     ------------------ */

export default function(state = defaultState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case SET_GROUP_INTERVAL:
      newState.groupInterval = action.groupInterval
      break
    default:
      return state
  }
  return newState
}
/* ------------       DISPATCHERS     ------------------ */

