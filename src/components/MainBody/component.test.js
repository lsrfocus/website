// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import MainBody from './component';

jest.mock('./Hero/component', () => 'Hero');

it('renders', () => {
  const tree = renderer.create(<MainBody />);
  expect(tree.toJSON()).toMatchSnapshot();
});
