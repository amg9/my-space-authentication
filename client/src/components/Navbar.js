import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const Navbar = () => (
  <Menu>
    <Menu.Item>
      <Link to="/">Home</Link>
    </Menu.Item>
  </Menu>
);

export default Navbar;