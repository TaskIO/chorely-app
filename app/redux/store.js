'use strict'
// Redux
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import combinedReducer from './reducers/'
import reduxThunk from 'redux-thunk'

// Middleware
const middleware = () => {
  return applyMiddleware(createLogger(), reduxThunk)
}

export default createStore(
  combinedReducer,
  middleware(),
)
