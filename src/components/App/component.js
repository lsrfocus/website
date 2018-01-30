// @flow

import React, { Component } from 'react';

import SOCIAL_LINKS from '../../socialLinks';

import SocialLink from '../SocialLink';
import NavBar from '../NavBar';
import Footer from '../Footer';

import './styles.css';

type Props = {};

class App extends Component<Props> {

  renderMainHeader() {
    return (
      <div className="main-header">
        <div className="main-title">Lovable. Simple. Refined.</div>
        <div className="main-subtitle">I listen to users and build the <i>minimal&nbsp;lovable&nbsp;solution</i> to their needs.</div>
        {this.renderSocialLinks()}
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
        <NavBar />
        {this.renderMainHeader()}
        <Footer />
      </div>
    );
  }

}

export default App;
