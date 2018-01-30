// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import App from './component';

jest.mock('../SocialLink/component', () => 'SocialLink');
jest.mock('../NavBar/component', () => 'NavBar');

it('renders', () => {
  const tree = renderer.create(<App />);
  expect(tree.toJSON()).toMatchSnapshot();
});
