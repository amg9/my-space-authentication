import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider'

class Profile extends React.Component {
  render() {
    const { user, } = this.props.auth
    return (
      <>
        <img src={user.image}/>
        <h1>{user.name}</h1>
      </>
    )
  }
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => 
      <Profile {...props} auth={value} />
    }
  </AuthConsumer>
)

export default ConnectedProfile;