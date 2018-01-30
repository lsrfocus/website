// @flow

import React from 'react';

import logo from '../../images/logo.svg';

import NavButton from '../NavButton';

import './styles.css';

function NavBar() {
  return (
    <div className="NavBar material z-depth-1">
      <a href="/">
        <img className="logo" src={logo} alt="Company logo" />
      </a>
      <div className="buttons">
        <NavButton href="/">Home</NavButton>
        <NavButton href="mailto:kevin@lsrfocus.com">Contact</NavButton>
      </div>
    </div>
  );
}

export default NavBar;
