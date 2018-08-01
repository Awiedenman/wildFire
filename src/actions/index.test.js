import * as actions from '../actions/index';
import { mockCleanFireData } from '../MockData/mockCleanFireData';

describe('actions', () => {
  test('should have a type STORE_CURRENT_FIRE_DATA', () => {
    const expectedAction = {
      type: 'STORE_CURRENT_FIRE_DATA',
      cleanedCurrentFireData: mockCleanFireData
    };

    const result = actions.storeCurrentFireData(mockCleanFireData);

    expect(result).toEqual(expectedAction);
  });

  test('should have a type ADD_UNVERIFIED_FIRE', () => {
    const mockPayload = {
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
    const expectedAction = {
      type: 'ADD_UNVERIFIED_FIRE',
      unverifiedFiresFromDb: mockPayload
    };

    const result = actions.addUnverifiedFire(mockPayload);

    expect(result).toEqual(expectedAction);
  });
});
