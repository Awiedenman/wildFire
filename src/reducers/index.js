import { currentFireReducer } from './currentFireReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  currentFires: currentFireReducer
})