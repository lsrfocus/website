// @flow

import * as R from 'ramda';
import React, { Component } from 'react';
import { withStyles } from 'material-ui';

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

const styles = () => ({
});

export default R.compose(
  withStyles(styles),
)(MainBody);
