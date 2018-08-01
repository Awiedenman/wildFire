import { currentFireRequest, postUnverifiedFires, getUnverifiedFires } from './apiCalls';
import { mockXmlData } from '../../MockData/mockXmlData';
import { mockUnverifiedFires } from '../../MockData/mockUnverifiedFires';


describe('currentFireResponse', () => {
  test('should call fetch with the correct parameters', async () => {
    const url = 'https://cors-anywhere.herokuapp.com/https://www.geomac.gov/DynContent/georss/nifc_large_firesW3C.xml';
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true,
        text: () => Promise.resolve(mockXmlData)
      }));

    await currentFireRequest();

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  test.skip('should return an error if the repsonse status is bad', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: false,
        text: () => Promise.reject()
      }));

    const expected = Error('Sorry, there was problem retreiving the current wildfires. Please try again later.');

    await expect(currentFireRequest()).rejects.toEqual(expected);
  }); 
});

describe('getUnverifiedFires', () => {
   test('should call fetch with the correct parameters', async () => {
    const mockUrl = 'http://localhost:3000/api/v1/fires';
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUnverifiedFires)
      }));

    await getUnverifiedFires();

    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });
})

describe('postUnverifiedFires', () => {
  test('should POST favorite on click', async () => {
     const mockUrl = 'http://localhost:3000/api/v1/fires';
     const mockOptionsObject = {
       method: 'POST',
       body: JSON.stringify({
         mockUnverifiedFires
       }),
       headers: {
         'Content-Type': 'application/json'
        }
      };
      
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          city: "",
          first_name: "",
          id: 11,
          last_name: "",
          latitude: "",
          longitude: "",
          state: "",
          verified: false,
          zip_code: ""
        })
      }));
      
      await postUnverifiedFires(mockUrl, mockOptionsObject);
      
      expect(window.fetch).toHaveBeenCalled();
  });

  test('should throw an error if POST fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
  Promise.resolve({
      ok: false,
      json: () => Promise.reject()
    }));

    await expect(postUnverifiedFires({
        first_name: ""
      })).rejects.toEqual(Error('Sorry, there was problem posting your fire. Please try again later.'))
    });
});

  

