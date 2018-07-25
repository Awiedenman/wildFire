import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import { storeCurrentFireData } from '../../actions';
import { currentFireRequest } from '../../heplers/apiCalls';
import { fireDataCleaner } from '../../heplers/cleaner';
// import { currentFireRequest } from '../../heplers/apiCalls';
import { mockCleanFireData } from '../../MockData/mockCleanFireData';


describe('App', () => {
  let wrapper;
  const mockStoreCurrentFireData = jest.fn();
  // const mockeparsedCurrentFireData = 
  // {rss : 
  //   { channel: 
  //     { item: 
  //       [{ 
  //         description:{
  //           _text: " 7/19/2018 10:30:00 PM,  6350.7 acres, Lat/Lon: 65.36033/-143.53233"},
  //         enclosure:{
  //           _attributes:{
  //             url: "Webber Creek.png"
  //           }
  //         },
  //        ' geo:lat':{
  //           _text: "65.36033"
  //         },
  //        ' geo:long':{
  //           _text: "-143.53233"},
  //         link:{
  //           _text: "https://rmgsc-haws1.cr.usgs.gov/geomac/DynContent/georss/Webber Creek.png"},
  //         pubDate:{
  //           _text: "Tue, 24 Jul 2018 12:30:10 MDT"},
  //         title:{
  //           _text: "Webber Creek,  2018-AKUYD-000135"}
  //         }]
  //       }}

  // beforeEach(() => wrapper = shallow(
  //   <App
  //     storeCurrentFireData = {mockCurrentFireRequest}
  //   />))

  // test('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  describe('componentDidMount', () => {
    wrapper = shallow(
    <App
      storeCurrentFireData = {mockStoreCurrentFireData}
    />)

    console.log(wrapper)

    test('should fetch initial fire data on page load', async () => {
      // const mockCurrentFireRequest = jest.fn();
      await wrapper.instance().componentDidMount();
      await currentFireRequest();
      fireDataCleaner();

      expect(mockStoreCurrentFireData).toHaveBeenCalled();
    })
  })
  
  describe('mapDispatchToProps', () => {
    test('should call dispatch when storeCurrentFireData is called', () => {
      const mockDispatch = jest.fn();
      // const mockCleanFireData = mockCleanFireData

      const actionToDispatch = storeCurrentFireData(mockCleanFireData);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.storeCurrentFireData(mockCleanFireData)

      expect(mappedProps).toHaveBeenCalledWith(actionToDispatch);
    })
  })
  
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
