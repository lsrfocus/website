// @flow

import React from 'react';

import Hero from './Hero';
import Services from './Services';

import './styles.css';

function MainBody() {
  return (
    <div className="MainBody">
      <Hero />
      <Services />
    </div>
  );
}

export default MainBody;
