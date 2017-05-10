'use strict'
// Redux
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import combinedReducer from './reducers/'

// Middleware
const middleware = () => {
  return applyMiddleware(thunk,createLogger())
}

export default createStore(
  combinedReducer,
  middleware(),
)
