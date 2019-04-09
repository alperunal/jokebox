import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

it('renders Modal correctly', () => {
  const func = () => {};
  const wrapper = shallow(<Modal closeModal={func}>TEST</Modal>);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.contains('TEST')).toBe(true);
});
