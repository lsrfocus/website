// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'material-ui';

import './styles.css';

type Props = {
  linkTo?: string,
  externalLinkTo?: string,
  bordered?: boolean,
  children: any,
};

function NavButton(props: Props) {
  const { linkTo, externalLinkTo, bordered, children } = props;

  return (
    <Button
      component={linkTo ? Link : 'a'}
      className={['NavButton', bordered ? 'bordered' : ''].join(' ')}
      to={linkTo}
      href={externalLinkTo}
    >
      <div className="link-text">
        {children}
      </div>
    </Button>
  );
}

export default NavButton;
