// @flow

import React from 'react';

import './styles.css';

type Props = {
  name: string,
  url: string,
  icon: string,
  iconHover: string,
};

const SocialLink = (props: Props) => {
  const { name, url, icon, iconHover } = props;

  return (
    <li className="social-link-item">
      <a className="social-link-anchor" href={url}>
        <img
          className={['social-icon', 'first', 'black'].join(' ')}
          src={icon}
          alt={name}
        />
        <img
          className={['social-icon', 'color'].join(' ')}
          src={iconHover}
          alt={name}
        />
      </a>
    </li>
  );
};

export default SocialLink;
