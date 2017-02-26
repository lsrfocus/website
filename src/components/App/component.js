import React, { Component } from 'react';

import SocialLink from '../SocialLink';

import profilePhoto from '../../images/profile-2017-web@800.jpg';

import './styles.css';

/* eslint-disable global-require */
const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/cooperka',
    icon: require('../../images/Facebook-black.svg'),
    iconHover: require('../../images/Facebook-color.svg'),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/cooperka92',
    icon: require('../../images/LinkedIn-black.svg'),
    iconHover: require('../../images/LinkedIn-color.svg'),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/cooperka',
    icon: require('../../images/Github-black.svg'),
    iconHover: require('../../images/Github-color.svg'),
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@cooperka',
    icon: require('../../images/Medium-black.svg'),
    iconHover: require('../../images/Medium-color.svg'),
  },
  {
    name: 'Tumblr',
    url: 'https://mentalmorsels.tumblr.com/',
    icon: require('../../images/Tumblr-black.svg'),
    iconHover: require('../../images/Tumblr-color.svg'),
  },
];
/* eslint-enable */

class App extends Component {

  renderMainHeader() {
    return (
      <div className="main-header">
        <img className="profile-photo" src={profilePhoto} alt="profile" />
        <div className="main-title">Kevin Cooper</div>
        <div className="main-subtitle">Software Engineer</div>
      </div>
    );
  }

  renderSocialLinks() {
    return (
      <ul className="social-links">
        {SOCIAL_LINKS.map((data, index) =>
          // eslint-disable-next-line react/no-array-index-key
          <SocialLink key={index} name={data.name} url={data.url} icon={data.icon} iconHover={data.iconHover} />,
        )}
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderMainHeader()}
        {this.renderSocialLinks()}
      </div>
    );
  }

}

export default App;
