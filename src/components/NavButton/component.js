// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

type Props = {
  linkTo?: string,
  externalLinkTo?: string,
  bordered?: boolean,
  children: any,
};

function NavButton(props: Props) {
  const { linkTo, externalLinkTo, bordered, children } = props;

  const innerLink = (
    <div className="link-text">
      {children}
    </div>
  );

  // TODO: Use the new material library instead.
  const linkClasses = 'material waves-effect waves-teal btn-flat';

  const link = linkTo ? (
    <Link to={linkTo} className={linkClasses}>
      {innerLink}
    </Link>
  ) : (
    <a href={externalLinkTo} className={linkClasses}>
      {innerLink}
    </a>
  );

  return (
    <div className={['NavButton', bordered ? 'bordered' : ''].join(' ')}>
      {link}
    </div>
  );
}

export default NavButton;
