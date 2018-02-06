// @flow

import React from 'react';
import { AppBar, Toolbar } from 'material-ui';

import logo from '../../images/logo.svg';

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
          <NavButton linkTo="/">Home</NavButton>
          <NavButton linkTo="/services">Services</NavButton>
          <NavButton externalLinkTo="mailto:kevin@lsrfocus.com">Contact</NavButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
