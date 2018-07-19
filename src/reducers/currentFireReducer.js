import { storeCurrentFireData } from '../actions';

export const currentFireReducer = (state=[], action) => {
  switch (action.type) {
    case 'STORE_CURRENT_FIRE_DATA':
    return [...store, action.currentFireData]
  
    default:
      return store;
  }
}