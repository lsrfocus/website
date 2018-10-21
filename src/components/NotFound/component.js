// @flow

import * as R from 'ramda';
import React, { Component } from 'react';
import { withStyles } from 'material-ui';
import { Link } from 'react-static';

import './styles.css';

type Props = {
  location: any,
};

class NotFound extends Component<Props> {

  render() {
    const { location } = this.props;
    return (
      <div className="NotFound page">
        <div className="title">Not found</div>
        <div className="section">
          <div className="subtitle">
            {'The page at '}
            <code>{location.pathname}</code>
            {' doesn\'t exist.'}
          </div>
          <div className="subtitle">
            {'Go back '}
            <Link to="/">home</Link>
            {'?'}
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
)(NotFound);
