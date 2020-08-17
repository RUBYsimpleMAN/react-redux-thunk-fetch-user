import React from 'react'

import './UserOptions.css'


export const UserOptions = ({ id, name, surname, desc }) => {
  return(
    <div>
      <ul>
        <li>
          <h1>UserID:</h1>      <p>{id}</p>
        </li>
        <li>
          <h1>Name:</h1>        <p>{name}</p>
        </li>
        <li>
          <h1>Surname:</h1>     <p>{surname}</p>
        </li>
        <li>
          <h1>Description:</h1> <p>{desc}</p>
        </li>
      </ul>
    </div>
  )
}
