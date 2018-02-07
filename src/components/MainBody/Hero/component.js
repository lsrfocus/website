// @flow

import React from 'react';

import NavButton from '../../NavButton/index';

import './styles.css';

function Hero() {
  return (
    <div className="Hero">
      <div className="title">Lovable. Simple. Refined.</div>
      <div className="subtitle">
        I listen to users and build the <i>minimal&nbsp;lovable&nbsp;solution</i> to meet their needs.
      </div>
      <div className="buttons">
        <NavButton bordered externalLinkTo="mailto:kevin@lsrfocus.com">Contact</NavButton>
      </div>
    </div>
  );
}

export default Hero;
