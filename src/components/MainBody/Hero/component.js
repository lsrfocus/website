// @flow

import * as R from 'ramda';
import React, { Component } from 'react';
import { withStyles } from 'material-ui';

import NavButton from '../../NavButton/component';

import './styles.css';

type Props = {
};

class Hero extends Component<Props> {

  render() {
    return (
      <div className="Hero page">
        <div className="title">Lovable. Simple. Refined.</div>
        <div className="section">
          <div className="subtitle">
            {'I listen to users and build the '}
            <i>minimal&nbsp;lovable&nbsp;solution</i>
            {' to meet their needs.'}
          </div>
        </div>
        <div className="buttons">
          <NavButton bordered externalLinkTo="mailto:kevin@lsrfocus.com">Contact</NavButton>
        </div>
      </div>
    );
  }

}

const styles = () => ({
});

export default R.compose(
  withStyles(styles),
)(Hero);
