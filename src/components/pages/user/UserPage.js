import React, { Component } from 'react'

import UserOptions from "./UserOptions"
import UserPageError from "./UserPageError.css"

class UserPage extends Component {
  state = {
    isUsersDownloaded : false,
    isError: false,
    users : []
  }
  componentDidMount = async () => {
    try {
      const response = await fetch(document.location.origin + "/ServerSubstitution.json", {
        method: "get",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      });
      const users = await response.json();

      this.setState( {
        isUsersDownloaded : true,
        users
      } );
    } 
    catch (error)
    {
      this.setState({
        isError: true,
        error
      });
    }
  }
  render() {
    if ( this.state.isError ) {
      return (
        <UserPageError
          name={ this.state.error.name }
          message={ this.state.error.message }
          path="/ServerSubstitution.json"
        />
      );
    }
    if ( !this.state.isUsersDownloaded ) {
      return <div> Data uploading </div>;
    }
    if ( this.state.users.length === 0 ) {
      return <div> There are no users there </div>;
    }
    return (
      <div>
        { this.state.users.map(
          userInfo => (
            <UserOptions
              key={ userInfo.id }
              { ...userInfo }
            />
          )
        ) }
      </div>
    );
  }
}

export default UserPage
