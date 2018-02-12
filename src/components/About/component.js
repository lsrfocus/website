// @flow

import React from 'react';

import './styles.css';

function About() {
  return (
    <div className="About">
      <div className="title">About</div>

      <div className="section">
        <div className="subtitle">What does LSR mean?</div>

        <div className="header">L - Lovable</div>
        <div className="description">People should love using your stuff.</div>

        <div className="header">S - Simple</div>
        <div className="description">Your stuff should be understandable and straightforward.</div>

        <div className="header">R - Refined</div>
        <div className="description">Your stuff should improve over time; it{"'"}s probably not perfect yet.</div>
      </div>

      <div className="section">
        <div className="subtitle">Why those three words?</div>
        <div className="description">
          LSR comes from a combination of two powerful concepts in software development:{' '}
          <a href="http://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp">
            Minimal Lovable Product
          </a>
          {' + '}
          <a href="https://steveblank.com/2015/05/06/build-measure-learn-throw-things-against-the-wall-and-see-if-they-work/">
            Build Measure Learn
          </a>
          . I highly recommend reading through those links to know more.
        </div>
      </div>
    </div>
  );
}

export default About;
