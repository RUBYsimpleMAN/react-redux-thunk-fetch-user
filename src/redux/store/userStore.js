import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { userReducer } from '../reducers/userReducer'


const rootReducer = combineReducers({
  user: userReducer
})

export const postStore = createStore(rootReducer, applyMiddleware(thunk))
