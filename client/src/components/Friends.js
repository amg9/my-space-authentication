import React from 'react';
import axios from 'axios';
import { Card, Button, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

class Friends extends React.Component {
  state = { friends: [], };

  componentDidMount() {
    axios.get(`/api/friends`)
      .then( res => {
        this.setState({ friends: res.data })
      })
  };

  render() {
    return (
      <Card.Group itemsPerRow="4">
        {this.state.friends.map( (f) => 
          <Card key={f.id}>
            <img src={f.image} />
            <Card.Content>
              <Card.Header>
                <Link to={`/profile/${f.id}`}>
                  {f.nickname}
                </Link>
              </Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Button>Unfriend</Button>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    );
  };
};

export default Friends;