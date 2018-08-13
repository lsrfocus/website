// @flow

import React from 'react';
import { Router, Route, Switch } from 'react-static';
import { Reboot } from 'material-ui';

import routes from '../../routes';

import NavBar from '../NavBar/component';
import Footer from '../Footer/component';
import NotFound from '../NotFound/component';
import ScrollToTopOnNavigate from '../ScrollToTop/component';

import './styles.css';

/**
 * Render the first main route that matches the current path,
 * or NotFound if no match.
 */
function renderRoutes() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} exact path={route.path} component={route.component} />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Reboot />
        <ScrollToTopOnNavigate />
        <NavBar />
        {renderRoutes()}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
