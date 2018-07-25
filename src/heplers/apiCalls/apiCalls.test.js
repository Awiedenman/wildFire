// import React from 'react';
import { currentFireRequest } from './apiCalls';
// import { mockCleanFireData } from '../../MockData/mockCleanFireData';

describe('currentFireResponse', () => {
  test.skip('should call fetch with the correct parameters', async () => {
    const url = 'https://cors-anywhere.herokuapp.com/https://www.geomac.gov/DynContent/georss/nifc_large_firesW3C.xml';
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve()
    }))
    // !what do I do here when it cam from xml?

    await currentFireRequest();

    expect(window.fetch).toBeCalled;
    // expect(window.fetch).toHaveBeenCalledWith(url)
  })

  test('should return an error if the repsonse status is bad', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: false,
      json: () => Promise.reject()
    }))

    const result = currentFireRequest();
    const expected = Error('Couldn\'t retreive the current fire');

    await expect(result).rejects.toEqual(expected);


    
  })

  // test('should return an error if the fetch failed', () => {
  //   window.fetch = jest.fn().mockImplementation(() => Promise.reject({}))
  // })
  
  
})
