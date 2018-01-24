// @flow

import React, { Component } from 'react';

import logo from '../../images/full-logo.svg';
import SOCIAL_LINKS from '../../socialLinks';

import SocialLink from '../SocialLink';

import './styles.css';

type Props = {};

class App extends Component<Props> {

  renderMainHeader() {
    return (
      <div className="main-header">
        <img className="company-logo" src={logo} alt="Company logo" />
        <div className="main-subtitle">Lovable. Simple. Refined.</div>
      </div>
    );
  }

  renderSocialLinks() {
    return (
      <ul className="social-links">
        {SOCIAL_LINKS.map(
          (data, index) =>
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
