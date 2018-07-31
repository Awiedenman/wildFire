import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
   const wrapper = shallow(
    <App />)
  
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
