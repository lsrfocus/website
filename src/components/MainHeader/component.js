// @flow

import React from 'react';

import SocialLink from '../SocialLink';

import './styles.css';
import SOCIAL_LINKS from '../../socialLinks';

function MainHeader() {
  return (
    <div className="MainHeader">
      <div className="title">Lovable. Simple. Refined.</div>
      <div className="subtitle">
        I listen to users and build the <i>minimal&nbsp;lovable&nbsp;solution</i> to their needs.
      </div>
      {renderSocialLinks()}
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

export default MainHeader;
