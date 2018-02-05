// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import Hero from './component';

it('renders', () => {
  const tree = renderer.create(<Hero />);
  expect(tree.toJSON()).toMatchSnapshot();
});
