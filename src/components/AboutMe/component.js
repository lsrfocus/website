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
      </div>
    );
  }

}

const styles = () => ({
});

export default R.compose(
  withStyles(styles),
)(AboutMe);
