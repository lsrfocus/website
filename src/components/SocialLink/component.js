// @flow

import * as R from 'ramda';
import React from 'react';
import { withStyles } from 'material-ui';

import './styles.css';

type Props = {
  name: string,
  url: string,
  icon: string,
  iconHover: string,
};

function SocialLink(props: Props) {
  const { name, url, icon, iconHover } = props;

  return (
    <li className="SocialLink">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="social-icon black"
          src={icon}
          alt={name}
        />
        <img
          className="social-icon color"
          src={iconHover}
          alt={name}
        />
      </a>
    </li>
  );
}

const styles = () => ({
});

export default R.compose(
  withStyles(styles),
)(SocialLink);
