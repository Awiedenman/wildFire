import { fireDataCleaner } from './cleaner';
import { mockCleanFireData, mockParsedFireData } from '../../MockData/mockCleanFireData';


describe('cleaner', () => {
  test('should clean the data', () => {

    const result = fireDataCleaner(mockParsedFireData)

    expect(result).toEqual(mockCleanFireData);
  })  
})
