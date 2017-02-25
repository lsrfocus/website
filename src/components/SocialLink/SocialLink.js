import React, { Component, PropTypes } from 'react';

import './SocialLink.css';

class SocialLink extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconHover: PropTypes.string.isRequired,
  };

  render() {
    const { name, url, icon, iconHover } = this.props;

    return (
      <li className="social-link">
        <a className="social-link" href={url}>
          <img
            className={['social-icon', 'black'].join(' ')}
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
  }

}

export default SocialLink;
