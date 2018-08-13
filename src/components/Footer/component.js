// @flow

import React from 'react';

import SocialLink from '../SocialLink/component';

import './styles.css';
import SOCIAL_LINKS from '../../socialLinks';

function Footer() {
  return (
    <div className="Footer">
      {renderSocialLinks()}
      <div>Full website coming soon.</div>
      <div>&copy; 2018 LSR Software LLC</div>
    </div>
  );
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

export default Footer;
