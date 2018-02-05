// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import MainBody from './component';

it('renders', () => {
  const tree = renderer.create(<MainBody />);
  expect(tree.toJSON()).toMatchSnapshot();
});
