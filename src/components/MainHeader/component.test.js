// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import MainHeader from './component';

jest.mock('../SocialLink/component', () => 'SocialLink');

it('renders', () => {
  const tree = renderer.create(<MainHeader />);
  expect(tree.toJSON()).toMatchSnapshot();
});
