import React from 'react';
import { Form, Header, } from 'semantic-ui-react';
import { AuthConsumer, } from '../providers/AuthProvider';

class Register extends React.Component {
  state = { email: "", name: "", nickname: "", password: "", passwordConfirmation: "", };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }

  handleSubmit = (e) => {
    const { password, passwordConfirmation, } = this.state
    const { auth, history, } = this.props
    e.preventDefault();
    if (password === passwordConfirmation)
      auth.handleRegister(this.state, history);
    else
      alert("Passwords don't match!");
  }

  render() {
    return (
      <>
        <Header as="h1">Register</Header>
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
            required
            label="Name"
            placeholder="Name"
            name="name"
            type="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Input 
            required
            label="Nickname"
            placeholder="Nickame"
            name="nickname"
            type="nickname"
            value={this.state.nickname}
            onChange={this.handleChange}
          />
          <Form.Input 
            required
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Form.Input 
            required
            label="Password Confirmation"
            placeholder="Password Confirmation"
            name="passwordConfirmation"
            type="password"
            value={this.state.passwordConfirmation}
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    );
  };
};

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { auth => ( 
      <Register {...props} auth={auth} /> 
    )}
  </AuthConsumer>
);

export default ConnectedRegister;