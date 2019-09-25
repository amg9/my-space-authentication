import React from 'react';
import { Form, Button, } from 'semantic-ui-react';
import axios from 'axios';

class PostForm extends React.Component {
  state = { body: "", }

  componentDidMount() {
    const { id, user_id, } = this.props.match.params;
    if (id) {
      axios.get(`/api/users/${user_id}/posts/${id}`)
        .then( res => {
          this.setState({ body: res.data.body, })
        })
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { history, match: { params: { id, user_id,},}, } = this.props;
    if (id) {
      axios.put(`/api/users/${user_id}/posts/${id}`, this.state)
        .then( res => {
          history.push(`/profile/${user_id}`)
        })
    } else {
      axios.post(`/api/users/${user_id}/posts`, this.state)
        .then( res => {
          history.push(`/profile/${user_id}`)
        })
    }
  }

  removePost = () => {
    const { history, match: { params: { id, user_id,},}, } = this.props;
    axios.delete(`/api/users/${user_id}/posts/${id}`)
      .then( res => {
        history.push(`/profile/${user_id}`)
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
        { 
          this.props.match.params.id ? 
            <>
              <Form.Button>Edit Post</Form.Button>
              <Button 
                icon="trash" 
                onClick={this.removePost}
              />
            </>
          :
            <Form.Button>Post</Form.Button>
        }
        
      </Form>
    )
  }
}

export default PostForm;