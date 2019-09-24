import React from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null };

  handleRegister = (user, history) => {
    axios.post('/api/auth', user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push("/");
      })
      .catch( err => {
        console.log(err);
      })
  };

  handleLogin = () => {
    debugger;
  };

  handleLogout = () => {
    debugger;
  };

  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
      }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  };
};

export default AuthProvider;