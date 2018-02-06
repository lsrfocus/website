// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import Button from './component';

it('renders without border', () => {
  const tree = renderer.create(<Button linkTo="/test">Click me</Button>);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders with border', () => {
  const tree = renderer.create(<Button bordered linkTo="/test">Click me</Button>);
  expect(tree.toJSON()).toMatchSnapshot();
});
