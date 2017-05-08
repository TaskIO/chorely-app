/* -----------------    IMPORTS     ------------------ */
// Default exports?
import { NavigatorHomeTab } from '../../tabs/homeTab/navigationConfiguration'
import { NavigatorGroupTab } from '../../tabs/groupTab/navigationConfiguration'
import { NavigatorTaskTab } from '../../tabs/taskTab/navigationConfiguration'
import { NavigatorTabBar } from '../../tabs/tabBar/navigationConfiguration'

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

export const tabBar = (state, action) => {
  if (action.type === 'JUMP_TO_TAB') { // Use your constant
    return {...state, index: action.payload.index }
  } else {
    return NavigatorTabBar.router.getStateForAction(action, state)
  }
}

export const homeTab = (state, action) => NavigatorHomeTab.router.getStateForAction(action, state)
export const groupTab = (state, action) => NavigatorGroupTab.router.getStateForAction(action, state)
export const taskTab = (state, action) => NavigatorTaskTab.router.getStateForAction(action, state)
