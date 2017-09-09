import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import currentUser from './currentUser'
import users from './users'
import searches from './searches'
import gifs from './gifs'

const reducer = combineReducers({currentUser, users, searches, gifs})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './currentUser'
export * from './users'
export * from './searches'
export * from './gifs'
