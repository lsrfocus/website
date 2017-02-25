import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './SocialLink.css';

class SocialLink extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconHover: PropTypes.string.isRequired,
  };

  state = {
    isHovering: false,
  };

  handleMouseOver() {
    this.setState({ isHovering: true });
  }

  handleMouseOut() {
    this.setState({ isHovering: false });
  }

  render() {
    const { isHovering } = this.state;
    const { name, url, icon, iconHover } = this.props;

    return (
      <li className="social-link">
        <a
          className="social-link"
          href={url}
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}
        >
          <ReactCSSTransitionGroup
            transitionName="hover"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <img
              key={isHovering}
              className="social-icon"
              src={isHovering ? iconHover : icon}
              alt={name}
            />
          </ReactCSSTransitionGroup>
        </a>
      </li>
    );
  }

}

export default SocialLink;
