// @flow

import React, { Component } from 'react';

import logo from '../../images/full-logo.svg';
import SOCIAL_LINKS from '../../socialLinks';

import SocialLink from '../SocialLink';

import './styles.css';

type Props = {};

class App extends Component<Props> {

  renderNavBar() {
    return (
      <div className="nav-bar material z-depth-1">
        <img className="company-logo" src={logo} alt="Company logo" />
      </div>
    );
  }

  renderMainHeader() {
    return (
      <div className="main-header">
        <div className="main-subtitle">Lovable. Simple. Refined.</div>
        <div className="main-subtitle">Full website coming soon. <a href="mailto:kevin@lsrfocus.com">Contact us</a> for inquiries.</div>
      </div>
    );
  }

  renderMainContent() {
    return null;
  }

  renderFooter() {
    return this.renderSocialLinks();
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
        {this.renderNavBar()}
        {this.renderMainHeader()}
        {this.renderMainContent()}
        {this.renderFooter()}
      </div>
    );
  }

}

export default App;
