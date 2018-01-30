// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import App from './component';

jest.mock('../NavBar/component', () => 'NavBar');
jest.mock('../MainHeader/component', () => 'MainHeader');
jest.mock('../Footer/component', () => 'Footer');

it('renders', () => {
  const tree = renderer.create(<App />);
  expect(tree.toJSON()).toMatchSnapshot();
});
