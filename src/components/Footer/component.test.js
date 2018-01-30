// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './component';

it('renders', () => {
  const tree = renderer.create(<Footer />);
  expect(tree.toJSON()).toMatchSnapshot();
});
