import { READ_USERS } from '../types/actionTypes'

const initialState = {users} //[]

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case READ_USERS: return {...state, users}  //action.payload
    default:         return state
  }
}
