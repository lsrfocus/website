// @flow

import React from 'react';

import NavButton from '../NavButton';

import './styles.css';

function MainBody() {
  return (
    <div className="MainBody">
      <div className="title">Lovable. Simple. Refined.</div>
      <div className="subtitle">
        I listen to users and build the <i>minimal&nbsp;lovable&nbsp;solution</i> to their needs.
      </div>
      <div className="buttons">
        <NavButton bordered href="mailto:kevin@lsrfocus.com">Contact</NavButton>
      </div>
    </div>
  );
}

export default MainBody;
