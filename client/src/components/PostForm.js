import React from 'react';
import { Form, } from 'semantic-ui-react';
import axios from 'axios';

class PostForm extends React.Component {
  state = { body: "", }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { history, match, } = this.props;
    axios.post(`/api/users/${match.params.user_id}/posts`, this.state)
      .then( res => {
        history.push(`/profile/${match.params.user_id}`)
      })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.TextArea
          required
          label="Post Body"
          name="body"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <Form.Button>Post</Form.Button>
      </Form>
    )
  }
}

export default PostForm;