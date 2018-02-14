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
  module.hot.accept();

  // TODO: This doesn't work.
  // module.hot.accept('./components/App/component', () => {
  //   // eslint-disable-next-line global-require
  //   renderRoot(require('./components/App/component').default);
  // });
}

renderRoot(<App />);

// Export top level component for static rendering.
export default App;
