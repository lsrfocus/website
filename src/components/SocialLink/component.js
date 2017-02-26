import React, { PropTypes } from 'react';

import './styles.css';

const SocialLink = (props) => {
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

SocialLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconHover: PropTypes.string.isRequired,
};

export default SocialLink;
