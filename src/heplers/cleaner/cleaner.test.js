import { fireDataCleaner } from './cleaner';
import { mockCleanFireData } from '../../MockData/mockCleanFireData';
import { mockParsedFireData } from '../../MockData/mockParsedFireData';

describe('cleaner', () => {
  test('should clean the data', () => {

    const result = fireDataCleaner(mockParsedFireData)

    expect(result).toEqual(mockCleanFireData);
  })  
})
