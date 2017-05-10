'use strict'
// Redux
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import reduxThunk from 'redux-thunk'
import combinedReducer from './reducers/'

// Middleware
const middleware = () => {
  return applyMiddleware(createLogger(), reduxThunk)
}

export default createStore(
  combinedReducer,
  middleware(),
)
