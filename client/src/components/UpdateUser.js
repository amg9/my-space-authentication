import React from 'react';
import { Form, Header, } from 'semantic-ui-react';
import { AuthConsumer, } from '../providers/AuthProvider';

class UpdateUser extends React.Component {
  state = { email: "", name: "", nickname: "", image: "", };

  componentDidMount() {
    const { email, name, nickname, image, } = this.props.auth.user;
    this.setState({ email, name, nickname, image, });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.auth.handleUpdate(this.state, this.props.history);
  }

  render() {
    return (
      <>
        <Header as="h1">UpdateUser</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            required
            autoFocus
            label="Email"
            placeholder="Email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Name"
            placeholder="Name"
            name="name"
            type="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Nickname"
            placeholder="Nickame"
            name="nickname"
            type="text"
            value={this.state.nickname}
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Image Link"
            placeholder="image_url"
            name="image"
            type="text"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    );
  };
};

const ConnectedUpdateUser = (props) => (
  <AuthConsumer>
    { auth => ( 
      <UpdateUser {...props} auth={auth} /> 
    )}
  </AuthConsumer>
);

export default ConnectedUpdateUser;