// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import MainHeader from './component';

it('renders', () => {
  const tree = renderer.create(<MainHeader />);
  expect(tree.toJSON()).toMatchSnapshot();
});
