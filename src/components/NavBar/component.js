// @flow

import React from 'react';
import { AppBar, Toolbar } from 'material-ui';

import logo from '../../images/logo.svg';
import routes from '../../routes';

import NavButton from '../NavButton';

import './styles.css';

function NavBar() {
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

export default NavBar;
