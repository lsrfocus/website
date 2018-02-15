// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import ScrollToTop from './component';

it('renders', () => {
  const tree = renderer.create(<ScrollToTop />);
  expect(tree.toJSON()).toMatchSnapshot();
});
