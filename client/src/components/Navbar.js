import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';
import { AuthConsumer, } from '../providers/AuthProvider'

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, history, } = this.props;

    if (user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            onClick={ () => handleLogout(history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item active={location.pathname === '/login'}>
              Login
            </Menu.Item>
          </Link>
          <Link to="/register">
            <Menu.Item active={location.pathname === '/register'}>
              Register
            </Menu.Item>
          </Link>
        </Menu.Menu>
      )
    }
  };

  render() {
    return (
      <Menu>
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        { this.rightNavItems() }
      </Menu>
    );
  };
};

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { value => (
          <Navbar {...this.props} auth={value} />
        )}
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);