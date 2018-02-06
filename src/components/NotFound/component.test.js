// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import NotFound from './component';

it('renders', () => {
  const tree = renderer.create(<NotFound location={{ pathname: '/test' }} />);
  expect(tree.toJSON()).toMatchSnapshot();
});
