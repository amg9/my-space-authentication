import React from 'react';
import axios from 'axios';
import { Header, Button, Card, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import { AuthConsumer, } from '../providers/AuthProvider';

class Profile extends React.Component {
  state = { user: {}, posts: [], }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/users/${id}`)
      .then ( res => {
        this.setState({ user: res.data, })
      })

      axios.get(`/api/users/${id}/posts`)
      .then( res => {
        this.setState({ posts: res.data, })
      })
  }

  render() {
    const { user, } = this.state
    const { auth, } = this.props
    return (
      <div style={{display: 'flex', justifyContent: 'space-around',}}>
        <div>
          <img src={user.image}/>
          <Header as="h1">{user.nickname}</Header>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <div>
          <Header as="h3">Posts</Header>
          { 
            auth.user.id === user.id ?
              <Button as={Link} to={`/${user.id}/new_post`}>New Post</Button>
            :
              null
          }
          {this.state.posts.map( (p) => 
            <Card key={p.id} >
              <Card.Content>
                {p.body}
              </Card.Content>
              <Card.Content extra>
              { 
                auth.user.id === user.id ?
                  <>
                    <Button 
                      as={Link} 
                      to={`/${user.id}/edit_post/${p.id}`}
                      icon="pencil"
                    />
                    <Button icon="trash" />
                  </>
                :
                  <Button icon="heart" />
              }
              </Card.Content>
            </Card> 
          )}
        </div>
      </div>
    );
  };
};

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => 
      <Profile {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedProfile;