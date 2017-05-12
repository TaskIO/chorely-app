/* -----------------    IMPORTS     ------------------ */

import { Navigator } from '../../views/navigation/navigationConfiguration'

/* -----------------    ACTION TYPES     ------------------ */

/* ------------   ACTION CREATORS     ------------------ */

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
