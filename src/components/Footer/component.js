// @flow

import * as R from 'ramda';
import classNames from 'classnames';
import React, { Component } from 'react';
import { withStyles } from 'material-ui';

import { size } from '../../constants';

import SocialLink from '../SocialLink/component';

import './styles.css';
import SOCIAL_LINKS from '../../socialLinks';

type Props = {
  classes: Object,
};

class Footer extends Component<Props> {

  render() {
    const { classes } = this.props;

    return (
      <div className={classNames(classes.footer, 'Footer')}>
        {renderSocialLinks()}
        <div>Full website coming soon.</div>
        <div>&copy; 2018 LSR Software LLC</div>
      </div>
    );
  }

}

function renderSocialLinks() {
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

const styles = () => ({
  footer: {
    height: size.FOOTER_HEIGHT,
  },
});

export default R.compose(
  withStyles(styles),
)(Footer);
