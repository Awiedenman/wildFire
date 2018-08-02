import React from 'react';
import { shallow } from 'enzyme';
import { mockCleanFireData } from '../../MockData/mockCleanFireData';
import { CurrentFires, mapStateToProps } from './CurrentFires';
import {Geocoder}  from "google";

describe('CurrentFires', () => {

  describe('onMarkerClick', () => {
    test('should set the state ', () => {
      const wrapper = shallow(
        <CurrentFires 
          currentFires={mockCleanFireData}
        /> );

      const mockProps = {
        name: "416",
        image: undefined,
        acresBurned: " 54129 acres",
        lastUpdate: " 7/24/2018 10:15:00 PM",
        latitude: "37.4605800000001",
        longitude: "-107.8081"
      };

      wrapper.instance().onMarkerClick(mockProps);

      expect(wrapper.state('selectedPlace')).toEqual(mockProps);
      expect(wrapper.state('showingInfoWindow')).toEqual(true);
    });
  });

  describe('onMapClicked', () => {
    test('should reset state when map is clicked off of infoWindow', () => {
      const wrapper = shallow(
        <CurrentFires 
          currentFires={mockCleanFireData}
        />);
  
      const mockProps = {};
  
      const mockNewState = {
        showingInfoWindow: false,
        activeMarker: null
      };
  
      wrapper.instance().onMapClicked(mockProps);
  
      expect(wrapper.state('showingInfoWindow')).toEqual(false);
      expect(wrapper.state('activeMarker')).toEqual({});   
    }); 
  });

  describe('mapStateToProps', () => {
    test('should return an array with cleanedCurrentFireData from state', () => {
      const mockState = {
        currentFires: mockCleanFireData,
        test: 'testData'
      };
  
      const expected = {currentFires: mockCleanFireData};
  
      const mappedProps = mapStateToProps(mockState);
  
      expect(mappedProps).toEqual(expected);
    }); 
  });

  test('should match snapshot', () => {
    const mockGoogle = {
      maps: {
        Geocoder: (code) => {
          this.geocode = code; 
        }
      }
    };

    const wrapper = shallow(
      <CurrentFires
        currentFires={mockCleanFireData}
        google={mockGoogle}
      />);

    expect(wrapper).toMatchSnapshot();
  });  
});