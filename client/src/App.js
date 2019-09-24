import React from 'react';
import './App.css';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Register from './components/Register';
import Login from './components/Login';
import FetchUser from './components/FetchUser';
import Profile from './components/Profile';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile/:user_id" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
);

export default App;
