// @flow

import * as R from 'ramda';
import classNames from 'classnames';
import React, { Component } from 'react';
import { Router } from 'react-static';
import { Reboot, MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui';

// This module is declared directly by react-static.
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies, import/extensions, $FlowFixMe
import Routes from 'react-static-routes';

import { string, size } from '../../constants';
import { mapKeysDeep } from '../../utils/object-utils';

import NavBar from '../NavBar/component';
import Footer from '../Footer/component';
import ScrollToTopOnNavigate from '../ScrollToTop/component';

import { theme as appTheme } from './theme';
import './styles.css';

const muiTheme = createMuiTheme(appTheme);

type Props = {
  classes: Object,
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
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={muiTheme}>
        <Router>
          <div className={classNames(classes.toolbarPadding, classes.footerPadding, 'App')}>
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

const styles = (theme) => {
  // Several CSS @media queries determine the toolbar height. Map these all to paddingTop.
  const replaceWithPadding = (value, key) => (key === 'minHeight' ? 'paddingTop' : key);
  const toolbarPadding = mapKeysDeep(theme.mixins.toolbar, replaceWithPadding);

  return {
    toolbarPadding,
    footerPadding: {
      paddingBottom: size.FOOTER_HEIGHT,
    },
  };
};

export default R.compose(
  withStyles(styles),
)(App);
