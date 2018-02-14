// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import Testimonials from './component';

it('renders', () => {
  const tree = renderer.create(<Testimonials />);
  expect(tree.toJSON()).toMatchSnapshot();
});
