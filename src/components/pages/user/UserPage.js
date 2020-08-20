import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { readUsersAction } from '../../../redux/actions/userActions'
import UserOptions from "./UserOptions"
import UserPageError from "./UserPageError"


const UserPage = ({ readUsersAction, users }) => {
  useEffect(() => {
    readUsersAction();
  }, [readUsersAction])

  return (
    <div>
      {users.map(userOnServer => (
            <UserOptions
              key={ userOnServer.id }
              { ...userOnServer }
            />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  users: state.users,
})

const mapDispatchToProps = { readUsersAction }

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)

// class UserPage extends Component {
//   state = {
//     isUsersDownloaded : false,
//     isError: false,
//     users : []
//   }
//   componentDidMount = async () => {
//     try {
//       let userFetchURL = 'http://77.120.241.80:8911/api/users'
//       const response = await fetch(userFetchURL,
//       // const response = await fetch(document.location.origin + "/ServerSubstitution.json",
//        {  method: "get",
//           headers: new Headers({
//             "Content-Type": "application/json"
//         })
//       })
//       const users = await response.json()
//         this.setState({
//         isUsersDownloaded : true,
//         users
//       })
//     } 
//     catch (error)
//     {
//       this.setState({
//         isError: true,
//         error
//       })
//     }
//   }
//   render() {
//     if (this.state.isError) {
//       return(
//         <UserPageError
//           name={this.state.error.name}
//           message={this.state.error.message}
//           path="/ServerSubstitution.json"
//         />
//       )
//     }
//     if (!this.state.isUsersDownloaded) {
//       return <div> Data uploading </div>
//     }
//     if (this.state.users.length === 0) {
//       return <div> There are no users there </div>
//     }
//     return (
//       <div>
//         { this.state.users.map(
//           userInfo => (
//             <UserOptions
//               key={ userInfo.id }
//               { ...userInfo }
//             />
//           )
//         )}
//       </div>
//     )
//   }
// }

// export default UserPage
