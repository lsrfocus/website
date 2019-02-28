// @flow

import * as R from 'ramda';
import React, { Component } from 'react';
import { Link } from 'react-static';
import { withStyles } from 'material-ui';

import './styles.css';

type Props = {
};

class About extends Component<Props> {

  render() {
    return (
      <div className="About page">
        <div className="title">About</div>

        <div className="section">
          <div className="subtitle">
            <Link to="/about/services">Services</Link>
          </div>
          <div className="description">
            {'What I can do for you.'}
          </div>
        </div>

        <div className="section">
          <div className="subtitle">
            <Link to="/about/lsr">About LSR</Link>
          </div>
          <div className="description">
            {'What my company represents.'}
          </div>
        </div>

        <div className="section">
          <div className="subtitle">
            <Link to="/about/kevin">About Kevin</Link>
          </div>
          <div className="description">
            {'Who I am.'}
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
)(About);
