import React from 'react';
import { shallow } from 'enzyme';
import { Home , mapDispatchToProps } from './Home';
import { storeCurrentFireData } from '../../actions';
import { mockCleanFireData } from '../../MockData/mockCleanFireData';
import { mockParsedFireData } from '../../MockData/mockParsedFireData';

jest.mock('../../heplers/apiCalls/apiCalls', () => ({
  currentFireRequest: jest.fn().mockImplementation(() => Promise.resolve(mockParsedFireData))
}))

describe('Home', () => {
  let wrapper;
  let mockStoreCurrentFireData;
  let mockCurrentFireRequest;
  let mockGetUnverifiedFires;


  describe('componentDidMount', () => {
    beforeEach(()=> {
      wrapper = shallow(
        <Home
          storeCurrentFireData = {mockStoreCurrentFireData}
        />)
    })

    test.skip('should fetch initial fire data on page load', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: ok,
        json: () => ({mockParsedFireData})
      }))
      await expect(window.fetch).toHaveBeenCalled();
    })
  })
  
  describe('mapDispatchToProps', () => {
    test('should call dispatch when storeCurrentFireData is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = storeCurrentFireData(mockCleanFireData);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.storeCurrentFireData(mockCleanFireData)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
  
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})

