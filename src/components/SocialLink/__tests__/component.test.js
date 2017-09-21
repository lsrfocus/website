// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import SocialLink from '../index';

it('renders', () => {
  const tree = renderer.create(
    <SocialLink
      name="name"
      url="url"
      icon="icon"
      iconHover="iconHover"
    />,
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
