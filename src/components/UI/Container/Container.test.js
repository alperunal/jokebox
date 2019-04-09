import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

it('renders Container correctly', () => {
  const wrapper = shallow(<Container>TEST</Container>);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.contains('TEST')).toBe(true);
});
