import React from 'react';
import { shallow } from 'enzyme';
import { mockCleanFireData } from '../../MockData/mockCleanFireData';
import { mapStateToProps } from './CurrentFires';

describe('CurrentFires', () => {
  
  describe('mapStateToProps', () => {
    const mockState = {
      currentFires: mockCleanFireData,
      test: 'testData'
    }

    const expected = {currentFires: mockCleanFireData};

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)

  })
})