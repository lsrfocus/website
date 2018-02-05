// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './component';

jest.mock('../SocialLink/component', () => 'SocialLink');

it('renders', () => {
  const tree = renderer.create(<Footer />);
  expect(tree.toJSON()).toMatchSnapshot();
});
