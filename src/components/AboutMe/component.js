// @flow

import * as R from 'ramda';
import React, { Component } from 'react';
import { withStyles } from 'material-ui';

import './styles.css';

type Props = {
};

class AboutMe extends Component<Props> {

  render() {
    return (
      <div className="AboutMe page">
        <div className="title">About Kevin</div>

        <div className="section">
          <div className="description">
            {'Kevin is the founder and owner of LSR Software. He lives in Ann Arbor with his partner Nina and two cats Midna and Ziri.'}
          </div>
          <div className="description">
            {'Find out more at his '}
            <a href="https://cooperka.com/">
              personal website
            </a>
            {'.'}
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
)(AboutMe);
