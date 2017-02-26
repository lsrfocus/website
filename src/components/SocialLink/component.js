import React, { Component, PropTypes } from 'react';

import './styles.css';

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
  }

}

export default SocialLink;
