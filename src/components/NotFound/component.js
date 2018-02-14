// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

type Props = {
  location: any,
};

function NotFound(props: Props) {
  const { location } = props;

  return (
    <div className="NotFound page">
      <div className="title">Not found</div>
      <div className="section">
        <div className="subtitle">
          The page at <code>{location.pathname}</code> doesn{'\''}t exist.
        </div>
        <div className="subtitle">
          Go back <Link to="/">home</Link>?
        </div>
      </div>
    </div>
  );
}

export default NotFound;
