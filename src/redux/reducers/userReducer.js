import { READ_USERS } from '../types/actionTypes'

const initialState = []

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case READ_USERS: return action.payload
    default:         return state
  }
}
