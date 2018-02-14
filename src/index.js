// @flow

import React from 'react';
import { render } from 'react-snapshot';
import 'typeface-roboto/index.css';

import App from './components/App';

import './styles.css';

// Only if document is available; skip during static builds.
if (typeof document !== 'undefined') {
  render(<App />, document.getElementById('root'));
}

// Export top level component for static rendering.
export default App;
