import React from 'react';
import renderer from 'react-test-renderer';

import SUT from '../component';

jest.mock('../../SocialLink/component', () => 'SocialLink');

it('renders', () => {
  const tree = renderer.create(<SUT />);
  expect(tree.toJSON()).toMatchSnapshot();
});
