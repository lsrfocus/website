import React, { Component, PropTypes } from 'react';

import './SocialLink.css';

class SocialLink extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    const { name, url, icon } = this.props;

    return (
      <li className="social-link">
        <a className="social-link" href={url}>
          <img className="social-icon" src={icon} alt={name} />
        </a>
      </li>
    );
  }

}

export default SocialLink;
