// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import App from './component';

jest.mock('../SocialLink/component', () => 'SocialLink');

it('renders', () => {
  const tree = renderer.create(<App />);
  expect(tree.toJSON()).toMatchSnapshot();
});
