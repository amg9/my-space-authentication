import React from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null, };

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

  handleLogin = (user, history) => {
    axios.post('/api/auth/sign_in', user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push('/');
      })
      .catch( err => {
        console.log(err);
      })
  };

  handleLogout = () => {
    axios.delete('/api/auth/sign_out')
      .then( res => {
        this.setState({ user: null, })
      })
      .catch( err => {
        console.log(err);
      })
  };

  handleUpdate = (new_info, history) => {
    const { user, } = this.state;
    axios.put(`/api/users/${user.id}`, new_info)
      .then( res => {
        this.setState({ user: res.data, })
        history.push(`/profile/${user.id}`);
      })
      .catch( err => {
        console.log(err);
      })
  };

  deleteAccount = (history) => {
    axios.delete(`/api/users/${this.state.user.id}`);
    this.setState({ user: null, });
    history.push('/register');
  }

  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        handleUpdate: this.handleUpdate,
        deleteAccount: this.deleteAccount,
        setUser: (user) => this.setState({user,}),
      }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  };
};

export default AuthProvider;