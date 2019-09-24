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
          <Link to={`/profile/${user.id}`}>
            <Menu.Item active={location.pathname === `/profile/${user.id}`}>
              My Profile
            </Menu.Item>
          </Link>
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
    const { location, } = this.props;
    return (
      <Menu>
        <Link to="/">
          <Menu.Item active={location.pathname === '/'}>
            Home
          </Menu.Item>
        </Link>
        <Link to="/people">
          <Menu.Item active={location.pathname === '/people'}>
            People
          </Menu.Item>
        </Link>
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