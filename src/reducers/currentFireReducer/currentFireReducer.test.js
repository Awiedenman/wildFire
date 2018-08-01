import { currentFireReducer } from './currentFireReducer';
import { mockCleanFireData } from '../../MockData/mockCleanFireData';
import { mockFiresFromDb } from '../../MockData/mockUnverifiedFires';

import * as actions from '../../actions';

describe('currentFireReducer', () => {
  test('should return the initial state', () => {
    const expected = [];
    const result = currentFireReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  test('should return state with currentFire information if storeCurrentFireData is called', () => {
    const expected = [...mockCleanFireData, ...mockFiresFromDb];

    const result = currentFireReducer([], actions.storeCurrentFireData(mockCleanFireData, mockFiresFromDb));

    expect(result).toEqual(expected);
  });

  test('should return the state containing the new addition to the fires when addUnverifiedFire is called', () => {
    const expected = [
      ...mockCleanFireData, 
      { id: 10,
        first_name: "",
        last_name: "will's blaze",
        fire_name: null,
        image: null,
        acres_burned: null,
        last_update: null,
        latitude: "40",
        longitude: "-79",
        city: "",
        state: "",
        zip_code: "",
        verified: false,
        created_at: "2018-07-31T23:04:57.695Z",
        updated_at: "2018-07-31T23:04:57.695Z"
      }
    ]
    const mockUnverifiedData = {
      id: 10,
      first_name: "",
      last_name: "will's blaze",
      fire_name: null,
      image: null,
      acres_burned: null,
      last_update: null,
      latitude: "40",
      longitude: "-79",
      city: "",
      state: "",
      zip_code: "",
      verified: false,
      created_at: "2018-07-31T23:04:57.695Z",
      updated_at: "2018-07-31T23:04:57.695Z"
    }
    const result = currentFireReducer(mockCleanFireData, actions.addUnverifiedFire(mockUnverifiedData));

    expect(result).toEqual(expected)
  });
});
