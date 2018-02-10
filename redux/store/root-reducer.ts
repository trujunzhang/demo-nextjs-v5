import { combineReducers } from 'redux';
import { RootState } from './root-state';

// Reducers
import { enthusiasm } from '../enthusiasm/reducers/index';

export const rootReducer = combineReducers<RootState>({
  enthusiasm
});
