// @flow

import * as R from 'ramda';
import React, { Component } from 'react';
import { withStyles } from 'material-ui';

import './styles.css';

type Props = {
};

class About extends Component<Props> {

  render() {
    return (
      <div className="About page">
        <div className="title">About</div>

        <div className="section">
          <div className="subtitle">L – Lovable</div>
          <div className="description">
            {'People should love every iteration of your product.'}
          </div>
        </div>

        <div className="section">
          <div className="subtitle">S – Simple</div>
          <div className="description">
            {'Your product should be understandable and straightforward.'}
          </div>
        </div>

        <div className="section">
          <div className="subtitle">R – Refined</div>
          <div className="description">
            {'Your product should be released as soon as it\'s lovable and simple – then it'
            + ' should be refined based on feedback.'}
          </div>
        </div>

        <div className="section">
          <div className="subtitle">Why those three words?</div>
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
)(About);
