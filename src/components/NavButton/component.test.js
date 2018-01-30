// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import Button from './component';

it('renders', () => {
  const tree = renderer.create(<Button href="/test">Click me</Button>);
  expect(tree.toJSON()).toMatchSnapshot();
});
