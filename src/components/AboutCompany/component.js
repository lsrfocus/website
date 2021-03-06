// @flow

import * as R from 'ramda';
import React, { Component } from 'react';
import { withStyles } from 'material-ui';

import './styles.css';

type Props = {
};

class AboutCompany extends Component<Props> {

  render() {
    return (
      <div className="AboutCompany page">
        <div className="title">About LSR</div>

        <div className="section">
          <div className="subtitle">L – Lovable</div>
          <div className="description">
            {'Your users should enjoy using your product.'}
          </div>
        </div>

        <div className="section">
          <div className="subtitle">S – Simple</div>
          <div className="description">
            {'Your users should find your product straightforward and easy to use.'}
          </div>
        </div>

        <div className="section">
          <div className="subtitle">R – Refined</div>
          <div className="description">
            {'Your product should be released as soon as your users find it to be lovable and simple, then it should be iteratively improved.'}
          </div>
        </div>

        <div className="section">
          <div className="subtitle">How are these things measured?</div>
          <div className="description">
            {'Note how each of the above sections includes "your users". They are the ones who can tell you if your product meets these criteria.'}
          </div>
        </div>

        <div className="section">
          <div className="subtitle">Why these three words?</div>
          <div className="description">
            {'LSR comes from a combination of two important concepts in software development: '}
            <a href="http://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp">
              Minimal Lovable Product
            </a>
            {' and '}
            <a href="https://steveblank.com/2015/05/06/build-measure-learn-throw-things-against-the-wall-and-see-if-they-work/">
              Build Measure Learn
            </a>
            {'.'}
          </div>
          <div className="description">
            {'I highly recommend reading through those links to learn more.'}
          </div>
        </div>
      </div>
    );
  }

}

const styles = () => ({
});

export default R.compose(
  withStyles(styles),
)(AboutCompany);
