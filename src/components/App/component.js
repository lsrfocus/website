// @flow

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Reboot } from 'material-ui';

import routes from '../../routes';

import NavBar from '../NavBar';
import Footer from '../Footer';

import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Reboot />
        <NavBar />
        {routes.map((route) => (
          <Route key={route.path} exact path={route.path} component={route.component} />
        ))}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
