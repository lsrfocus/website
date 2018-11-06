// @flow

import * as R from 'ramda';
import React, { Component } from 'react';
import { withStyles } from 'material-ui';

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
            <div className="grid-item">Prototypes</div>
            <div className="grid-item">User testing</div>
          </div>
        </div>

        <div className="section">
          <div className="subtitle">Business development</div>
          <div className="grid-container">
            <div className="grid-item">Strategic direction (&ldquo;what&rdquo;)</div>
            <div className="grid-item">Strategic execution (&ldquo;how&rdquo;)</div>
            <div className="grid-item">Team culture</div>
          </div>
        </div>
      </div>
    );
  }

}

const styles = () => ({
});

export default R.compose(
  withStyles(styles),
)(Services);
