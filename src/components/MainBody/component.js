// @flow

import React, { Component } from 'react';

import Hero from './Hero/component';

import './styles.css';

type Props = {
};

class MainBody extends Component<Props> {

  render() {
    return (
      <div className="MainBody">
        <Hero />
      </div>
    );
  }

}

export default MainBody;
