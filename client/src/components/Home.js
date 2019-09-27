import React from 'react';
import { Header, Card, } from 'semantic-ui-react';
import axios from 'axios';

class Home extends React.Component {
  state = { posts: [], }

  componentDidMount() {
    axios.get('/api/posts')
      .then( res => {
        this.setState({ posts: res.data, })
      })
    
  }

  render() {
    return (
      <>
        <Header as="h1">Home</Header>
        {this.state.posts.map( (p) => 
          <Card key={p.id} >
            <Card.Content>
              {p.body}
            </Card.Content>
          </Card> 
        )}
      </>
    );
  };
};
  

export default Home;