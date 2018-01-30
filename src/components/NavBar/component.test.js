// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import NavBar from './component';

it('renders', () => {
  const tree = renderer.create(<NavBar />);
  expect(tree.toJSON()).toMatchSnapshot();
});
