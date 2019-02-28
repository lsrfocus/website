// @flow

import * as R from 'ramda';
import React, { Component } from 'react';
import { withStyles } from 'material-ui';

import avatar from '../../images/kevin-ziri-min.jpg';

import './styles.css';

type Props = {
  classes: Object,
};

class AboutMe extends Component<Props> {

  render() {
    const { classes } = this.props;

    return (
      <div className="AboutMe page">
        <div className="title">About Kevin</div>

        <img className={classes.avatar} src={avatar} alt="Kevin at his laptop with Ziri" />

        <div className="section">
          <div className="description">
            {'Kevin is the founder and owner of LSR Software. He lives in Ann Arbor with his partner Nina and two cats Midna and Ziri (pictured).'}
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
  avatar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 4,
    height: 520,
  },
});

export default R.compose(
  withStyles(styles),
)(AboutMe);
