import React, { Component } from 'react';

import logo from '../../images/logo.svg';

import './App.css';

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/cooperka',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/cooperka92',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/cooperka',
  },
];

class App extends Component {

  renderMainHeader() {
    return (
      <div className="main-header">
        <img className="main-logo" src={logo} alt="logo" />
        <div className="main-title">Kevin Cooper</div>
        <div className="main-subtitle">Software Engineer</div>
      </div>
    );
  }

  renderSocialLinks() {
    return (
      <ul className="social-links">
        {SOCIAL_LINKS.map(this.renderSocialLink)}
      </ul>
    );
  }

  renderSocialLink({ name, url }, index) {
    return (
      <li className="social-link" key={index}>
        <a href={url}>{name}</a>
      </li>
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
