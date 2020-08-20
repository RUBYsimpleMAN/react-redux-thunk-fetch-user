import { READ_USERS } from "../types/actionTypes"

export const readUsersAction = () => {
  return async dispatch => {
    let userFetchURL = 'http://77.120.241.80:8911/api/users'    
    const response = await fetch(userFetchURL,
 // const response = await fetch(document.location.origin + "/ServerSubstitution.json",
       {  method: "get",
          headers: new Headers({
            "Content-Type": "application/json"
        })
      })
    dispatch({
      type: READ_USERS,
      payload: response.data
    })
  }
}

