import React from 'react';
import { Header } from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  test('should match the snapshot', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});