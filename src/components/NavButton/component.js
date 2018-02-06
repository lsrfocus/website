// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

type Props = {
  href?: string,
  bordered?: boolean,
  children: any,
};

function NavButton(props: Props) {
  const { href, bordered, children } = props;

  return (
    <div className={['NavButton', bordered ? 'bordered' : ''].join(' ')}>
      <Link
        className="material waves-effect waves-teal btn-flat"
        to={href}
      >
        <div>
          {children}
        </div>
      </Link>
    </div>
  );
}

export default NavButton;
