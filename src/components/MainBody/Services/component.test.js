// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import Services from './component';

it('renders', () => {
  const tree = renderer.create(<Services />);
  expect(tree.toJSON()).toMatchSnapshot();
});
