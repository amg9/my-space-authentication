import React from 'react';
import './App.css';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;
