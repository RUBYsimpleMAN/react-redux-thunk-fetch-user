import React from 'react'

import './UserOptions.css'


const UserOptions = ({ id, name, surname, desc }) => {
  return(
    <div>
      <ul>
          <h1>UserID:</h1>      <p>{id}</p>
          <h1>Name:</h1>        <p>{name}</p>
          <h1>Surname:</h1>     <p>{surname}</p>
          <h1>Description:</h1> <p>{desc}</p>
      </ul>
    </div>
  )
}

export default UserOptions
