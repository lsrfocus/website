// @flow

import React, { Component } from 'react';
import { Router } from 'react-static';
import { Reboot, MuiThemeProvider, createMuiTheme } from 'material-ui';

// This module is declared directly by react-static.
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies, import/extensions, $FlowFixMe
import Routes from 'react-static-routes';

import { string } from '../../constants';

import NavBar from '../NavBar/component';
import Footer from '../Footer/component';
import ScrollToTopOnNavigate from '../ScrollToTop/component';

import { theme } from './theme';
import './styles.css';

const muiTheme = createMuiTheme(theme);

type Props = {
};

class App extends Component<Props> {

  /**
   * Remove the statically injected CSS.
   * https://material-ui.com/guides/server-rendering
   */
  componentDidMount() {
    const jssStyles = document.getElementById(string.JSS_SERVER_SIDE_ID);
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Router>
          <div className="App">
            <Reboot />
            <ScrollToTopOnNavigate />
            <NavBar />
            <Routes />
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }

}

export default App;
