import { currentFireReducer } from '../reducers/currentFireReducer/currentFireReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  currentFires: currentFireReducer
})