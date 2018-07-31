import * as actions from '../actions/index';
import { mockCleanFireData } from '../MockData/mockCleanFireData';

describe('actions', () => {
  test('should have a type STORE_CURRENT_FIRE_DATA', () => {
    // const cleanedCurrentFireData = mockCleanFireData;
    const expectedAction = {
      type: 'STORE_CURRENT_FIRE_DATA',
      cleanedCurrentFireData: mockCleanFireData
    };

    const result = actions.storeCurrentFireData(mockCleanFireData);

    expect(result).toEqual(expectedAction);
  });
});
