// @flow

import React from 'react';

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
      <a
        className="material waves-effect waves-teal btn-flat"
        href={href}
      >
        <div>
          {children}
        </div>
      </a>
    </div>
  );
}

export default NavButton;
