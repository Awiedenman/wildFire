// import React from 'react';
import { currentFireRequest } from './apiCalls';
import { mockXmlData } from '../../MockData/mockXmlData';

describe('currentFireResponse', () => {
  test('should call fetch with the correct parameters', async () => {
    // console.log(mockXmlData)
    const url = 'https://cors-anywhere.herokuapp.com/https://www.geomac.gov/DynContent/georss/nifc_large_firesW3C.xml';
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true,
      text: () => Promise.resolve(mockXmlData)
    }))

    await currentFireRequest();

    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  test('should return an error if the repsonse status is bad', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: false,
      text: () => Promise.reject()
    }))

    const result = currentFireRequest();
    const expected = Error('Couldn\'t retreive the current fires list');

    await expect(result).rejects.toEqual(expected);    
  }) 
})
