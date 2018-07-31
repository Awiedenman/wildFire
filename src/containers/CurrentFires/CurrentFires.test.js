import React from 'react';
import { shallow } from 'enzyme';
import { mockCleanFireData } from '../../MockData/mockCleanFireData';
import { CurrentFires, mapStateToProps } from './CurrentFires';

describe('CurrentFires', () => {

  describe('onMarkerClick', () => {

    test('should set the state ', () => {
      const wrapper = shallow(
        <CurrentFires 
          currentFires={mockCleanFireData}
        /> )
      // const mockCurrentFires = mockCleanFireData
      const mockMarker = {marker: 'A very nice marker'}
      const mockProps = {
        name: "416",
        image: undefined,
        acresBurned: " 54129 acres",
        lastUpdate: " 7/24/2018 10:15:00 PM",
        latitude: "37.4605800000001",
        longitude: "-107.8081"
      }

      wrapper.instance().onMarkerClick();

      expect(wrapper.state('selectedPlace')).toEqual(mockProps);
      expect(wrapper.state('activeMarker')).toEqual(mockMarker);
      expect(wrapper.state('showInfoWindow')).toEqual(true);

    })
  })

  describe('onMapClicked', () => {
    const wrapper = shallow(
        <CurrentFires 
          currentFires={mockCleanFireData}
        />)

    const mockProps = {};

    const mockNewState = {
      showingInfoWindow: false,
      activeMarker: null
    };

    wrapper.instance().onMapClicked();

    expect(wrapper.state('showInfoWindow')).toEqual(false);
    expect(wrapper.state('activeMarker')).toEqual(null);
  })

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