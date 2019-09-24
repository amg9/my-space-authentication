import React from 'react';
import { Form, Header, } from 'semantic-ui-react';
import { AuthConsumer, } from '../providers/AuthProvider';

class Login extends React.Component {
  state = { email: "", password: "", };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <Header as="h1">Login</Header>
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
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    );
  };
};

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { auth => ( 
      <Login {...props} auth={auth} /> 
    )}
  </AuthConsumer>
);

export default ConnectedLogin;