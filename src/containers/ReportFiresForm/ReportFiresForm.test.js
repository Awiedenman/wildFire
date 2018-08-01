import React from 'react';
import { shallow } from 'enzyme';
import { ReportFiresForm } from './ReportFiresForm';
import { postUnverifiedFires } from '../../heplers/apiCalls/apiCalls';


describe('ReportFiresForm', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<ReportFiresForm />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    test('should change the state on input', () => {
      const wrapper = shallow(<ReportFiresForm/>);

      const mockEvent = { target: { name: 'firstName', value : 'Austin'}};

      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state('firstName')).toEqual(mockEvent.target.value);
    });
  });

  describe('handlePostUnverifiedFires', () => {
    test('should call fetch with the correct parameters', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            city:"",
            first_name:"",
            id:11,
            last_name:"",
            latitude:"",
            longitude:"",
            state:"",
            verified: false,
            zip_code:""
          })
        }));

      await postUnverifiedFires('Denver', 'austin', '11', 'Wiedenman', '45', '50', 'CO', false, 80219);

      expect(window.fetch).toHaveBeenCalled();
    });
    
    test('should throw and error if fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.reject()
        })
      );
      
      await expect(userSignUpRequest())
      .rejects.toEqual(Error(`Sorry, we could not fetch unverified fires from the database ${error.status}`));
    });
  });
});


  
  

  

