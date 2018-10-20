// @flow

import * as R from 'ramda';
import React, { Component } from 'react';
import { withStyles, AppBar, Toolbar } from 'material-ui';

import logo from '../../images/logo.svg';
import routes from './routes';

import NavButton from '../NavButton/component';

import './styles.css';

type Props = {
};

class NavBar extends Component<Props> {

  render() {
    return (
      <AppBar color="default">
        <Toolbar className="NavBar">
          <a href="/">
            <img className="logo" src={logo} alt="Home" />
          </a>
          <div className="buttons">
            {routes.map((route) => (
              <NavButton key={route.path} linkTo={route.path}>{route.displayName}</NavButton>
            ))}
            <NavButton externalLinkTo="mailto:kevin@lsrfocus.com">Contact</NavButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }

}

const styles = () => ({
});

export default R.compose(
  withStyles(styles),
)(NavBar);
