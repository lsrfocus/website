// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto/index.css';

import App from './components/App';

import './styles.css';

function renderRoot(component) {
  // Only if document is available; skip during static builds.
  if (typeof document !== 'undefined') {
    // $FlowFixMe
    const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

    // $FlowFixMe
    renderMethod(component, document.getElementById('root'));
  }
}

// Enable Hot Module Replacement (HMR).
if (module.hot) {
  module.hot.accept('./components/App/index', () => {
    // eslint-disable-next-line global-require
    const UpdatedApp = require('./components/App/index').default;
    renderRoot(<UpdatedApp />);
  });
}

renderRoot(<App />);

// Export top level component for static rendering.
export default App;
