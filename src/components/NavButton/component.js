// @flow

import * as R from 'ramda';
import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-static';
import { withStyles, Button } from 'material-ui';
import { styles as buttonStyles } from 'material-ui/Button/Button';

import './styles.css';

type Props = {
  classes: any,
  linkTo?: string,
  externalLinkTo?: string,
  bordered?: boolean,
  children: any,
};

function NavButton(props: Props) {
  const { classes, linkTo, externalLinkTo, bordered, children } = props;
  const isRouterLink = !!linkTo;

  return (
    <Button
      component={isRouterLink ? NavLink : 'a'}
      className={classNames([classes.navButton, 'NavButton', bordered ? 'bordered' : ''])}
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

const styles = (theme) => ({
  navButton: {
    [theme.breakpoints.down('xs')]: buttonStyles(theme).sizeSmall,
  },
});

export default R.compose(
  withStyles(styles),
)(NavButton);
