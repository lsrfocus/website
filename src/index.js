// @flow

import React from 'react';
import { render } from 'react-snapshot';

import App from './components/App';

import './styles.css';
import './vendor/materialize/sass/materialize.css';

render(<App />, document.getElementById('root'));
