import React from 'react';
import { shallow } from 'enzyme';
import { mockCleanFireData } from '../../MockData/mockCleanFireData';
import { CurrentFires, mapStateToProps } from './CurrentFires';

describe('CurrentFires', () => {
  
  describe('mapStateToProps', () => {
    test('should return an array with cleanedCurrentFireData from state', () => {
      const mockState = {
        currentFires: mockCleanFireData,
        test: 'testData'
      }
  
      const expected = {currentFires: mockCleanFireData};
  
      const mappedProps = mapStateToProps(mockState)
  
      expect(mappedProps).toEqual(expected)
    }) 
  })

  test('should match snapshot', () => {
    const wrapper = shallow(
      <CurrentFires
        currentFires={mockCleanFireData}
      />)

      expect(wrapper).toMatchSnapshot();
  })  
})