import React from 'react'

import './UserPageError.css'


const UserPageError = ({ message, name, path }) => {
  return(
    <div>
      <h1>Uploading path</h1>
        { path }
      <h1>return error:</h1>
      <p>
        { name }
      </p>
      
      <h2>Read more about it: </h2>
      <p>
        { message }
      </p>
    </div>
  )
}

export default UserPageError
