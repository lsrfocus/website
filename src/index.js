// @flow

import React from 'react';
import { render } from 'react-snapshot';
import 'typeface-roboto/index.css';

import App from './components/App';

import './styles.css';

render(<App />, document.getElementById('root'));
