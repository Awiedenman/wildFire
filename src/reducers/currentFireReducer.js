import { storeCurrentFireData } from '../actions';

export const currentFireReducer = (state=[], action) => {
  switch (action.type) {
    case 'STORE_CURRENT_FIRE_DATA':
    return [...state, action.currentFireData]
  
    default:
      return state;
  }
}