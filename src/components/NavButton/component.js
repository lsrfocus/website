// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
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
  const isRouterLink = !!linkTo;

  return (
    <Button
      component={isRouterLink ? NavLink : 'a'}
      className={['NavButton', bordered ? 'bordered' : ''].join(' ')}
      to={linkTo}
      exact={isRouterLink ? true : undefined}
      href={externalLinkTo}
    >
      <div className="link-text">
        {children}
      </div>
    </Button>
  );
}

export default NavButton;
