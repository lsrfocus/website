import React, { Component } from 'react';

import logo from '../../images/logo.svg';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="main-header">
          <img className="main-logo" src={logo} alt="logo" />
          <div className="main-title">Kevin Cooper</div>
          <div className="main-subtitle">Software Engineer</div>
        </div>
        <ul className="social-links">
          <li className="social-link"><a href="https://www.facebook.com/cooperka">Facebook</a></li>
          <li className="social-link"><a href="https://www.linkedin.com/in/cooperka92">LinkedIn</a></li>
          <li className="social-link"><a href="https://github.com/cooperka">GitHub</a></li>
        </ul>
      </div>
    );
  }

}

export default App;
