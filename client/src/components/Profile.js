import React from 'react';
import axios from 'axios';

class Profile extends React.Component {
  state = { user: {}, }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then ( res => {
        this.setState({ user: res.data, })
      })
  }

  render() {
    const { user, } = this.state
    return (
      <>
        <img src={user.image}/>
        <h1>{user.nickname}</h1>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </>
    )
  }
}

export default Profile;