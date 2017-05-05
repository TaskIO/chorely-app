'use strict'
// Redux
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import combinedReducer from './reducers/'

// Middleware
const middleware = () => {
  return applyMiddleware(createLogger())
}

export default createStore(
  combinedReducer,
  middleware(),
)