// @flow

import React from 'react';

import NavButton from '../../NavButton/component';

import './styles.css';

function Hero() {
  return (
    <div className="Hero page">
      <div className="title">Lovable. Simple. Refined.</div>
      <div className="section">
        <div className="subtitle">
          I listen to users and build the <i>minimal&nbsp;lovable&nbsp;solution</i> to meet their needs.
        </div>
      </div>
      <div className="buttons">
        <NavButton bordered externalLinkTo="mailto:kevin@lsrfocus.com">Contact</NavButton>
      </div>
    </div>
  );
}

export default Hero;
