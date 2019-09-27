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
import People from './components/People';
import ProtectedRoute from './components/ProtectedRoute';
import PostForm from './components/PostForm';
import Friends from './components/Friends';
import UpdateUser from './components/UpdateUser';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <FetchUser>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/people" component={People} />
          <ProtectedRoute exact path="/friends" component={Friends} />
          <ProtectedRoute exact path="/profile/:id" component={Profile} />
          <ProtectedRoute exact path="/edit_profile" component={UpdateUser} />
          <ProtectedRoute exact path="/:user_id/new_post" component={PostForm} />
          <ProtectedRoute exact path="/:user_id/edit_post/:id" component={PostForm} />
        </FetchUser>
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;
