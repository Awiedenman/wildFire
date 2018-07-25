import React from 'react'
import { currentFireReducer } from './currentFireReducer';
import { mockCleanFireData } from '../../MockData/mockCleanFireData';
import * as actions from '../../actions';

describe('currentFireReducer', () => {
  test('should return the initial state', () => {
    const expected = [];

    const result = currentFireReducer(undefined, {});

    expect(result).toEqual(expected);
  })

  test('should return state with currentFire information', () => {
    const expected = mockCleanFireData;

    const result = currentFireReducer([], actions.storeCurrentFireData(mockCleanFireData));

    expect(result).toEqual(expected);
  })
})
