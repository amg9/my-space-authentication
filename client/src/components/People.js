import React from "react";
import { Link, } from "react-router-dom";
import { Card, Button, } from "semantic-ui-react";
import axios from "axios";
import { AuthConsumer, } from "../providers/AuthProvider";

class People extends React.Component {
  state = { people: [], }

  componentDidMount() {
    axios.get(`/api/users`)
      .then( res => {
        const people = res.data.filter( (p) => {
          if (p.id !== this.props.auth.user.id)
            return p;
        })
        this.setState({ people, })
      })
  }

  addFriend = (id) => {
    if (this.props.auth.user) {
      axios.put(`/api/friends/${id}`)
        .then ( res => {
          debugger
        })
    }
  }

  render() {
    return (
      <Card.Group itemsPerRow="4">
        {this.state.people.map( (p) => 
          <Card key={p.id}>
            <img src={p.image} />
            <Card.Content>
              <Card.Header>
                <Link to={`/profile/${p.id}`}>
                  {p.nickname}
                </Link>
              </Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Button onClick={() => this.addFriend(p.id)}>Add Friend</Button>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    )
  }
}

const ConnectedPeople = (props) => (
  <AuthConsumer>
    { auth => 
      <People {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedPeople;