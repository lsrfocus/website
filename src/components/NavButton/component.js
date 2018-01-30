// @flow

import React from 'react';

import './styles.css';

type Props = {
  children: any,
  href?: string,
};

function NavButton(props: Props) {
  const { href, children } = props;

  return (
    <a
      className="NavButton material waves-effect waves-teal btn-flat"
      href={href}
    >
      <div>
        {children}
      </div>
    </a>
  );
}

export default NavButton;
