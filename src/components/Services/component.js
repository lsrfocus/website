// @flow

import React, { Component } from 'react';

import './styles.css';

type Props = {
};

class Services extends Component<Props> {

  render() {
    return (
      <div className="Services page">
        <div className="title">Services</div>

        <div className="section">
          <div className="subtitle">Software development</div>
          <div className="grid-container">
            <div className="grid-item">Web apps</div>
            <div className="grid-item">Mobile apps</div>
            <div className="grid-item">User testing</div>
            <div className="grid-item">Project planning</div>
          </div>
        </div>

        <div className="section">
          <div className="subtitle">Small business development</div>
          <div className="grid-container">
            <div className="grid-item">Strategic planning</div>
            <div className="grid-item">Team building</div>
          </div>
        </div>
      </div>
    );
  }

}

export default Services;
