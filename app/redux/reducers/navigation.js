/* -----------------    IMPORTS     ------------------ */

import { Navigator } from '../../views/navigation/navigationConfiguration'

/* -----------------    ACTION TYPES     ------------------ */

const JUMP_TO_TAB = 'JUMP_TO_TAB'

/* ------------   ACTION CREATORS     ------------------ */

export const jumpToTab = (index) => ({
  type: JUMP_TO_TAB,
  index
})


/* ------------       REDUCERS     ------------------ */

/*
* Navigation reducers rely on react-navigation custom routing
* See docs for Custom Router API for more information:
* https://reactnavigation.org/docs/routers/api
*
* Naming of these reducers is tightly coupled to the navigation state
* found in ...Navigation.js files.  Unclear error messages appear if these don't stay synced.
*/

export const authenticated = (state, action) => Navigator.router.getStateForAction(action, state)
