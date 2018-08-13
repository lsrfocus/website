// @flow

import React from 'react';
import { Router } from 'react-static';
import { Reboot } from 'material-ui';

// This module is declared directly by react-static.
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies, import/extensions, $FlowFixMe
import Routes from 'react-static-routes';

import NavBar from '../NavBar/component';
import Footer from '../Footer/component';
import ScrollToTopOnNavigate from '../ScrollToTop/component';

import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Reboot />
        <ScrollToTopOnNavigate />
        <NavBar />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
