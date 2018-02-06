// @flow

import React from 'react';

import logo from '../../images/logo.svg';

import NavButton from '../NavButton';

import './styles.css';

function NavBar() {
  // TODO: Use the new material library instead for shadows.
  return (
    <div className="NavBar material z-depth-1">
      <a href="/">
        <img className="logo" src={logo} alt="Company logo" />
      </a>
      <div className="buttons">
        <NavButton linkTo="/">Home</NavButton>
        <NavButton externalLinkTo="mailto:kevin@lsrfocus.com">Contact</NavButton>
      </div>
    </div>
  );
}

export default NavBar;
