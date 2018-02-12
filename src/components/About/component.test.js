// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import About from './component';

it('renders', () => {
  const tree = renderer.create(<About />);
  expect(tree.toJSON()).toMatchSnapshot();
});
