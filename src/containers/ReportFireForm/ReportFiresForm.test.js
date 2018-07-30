import React from 'react';
import { shallow } from 'enzyme';
import { ReportFiresForm } from './ReportFiresForm';

describe('ReportFiresForm', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<ReportFiresForm />)

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    test('should change the state on input', () => {
      const wrapper = shallow(<ReportFiresForm/>);

      const mockEvent = { target: { name: 'firstName', value : 'Austin'}}

          wrapper.instance().handleChange(mockEvent);

          expect(wrapper.state('firstName')).toEqual(mockEvent.target.value);
    });
  });

  describe('', () => {
    
  })
  

  
});
