import { createStore, applyMiddleware } from 'redux';
import { RootState } from './root-state';
import { INITIAL_STATE as EnthusiasmInitialState } from '../enthusiasm/types/initialState';
import { rootReducer } from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

// Initial state of the root Redux store
const INITIAL_STATE: RootState = {
  enthusiasm: EnthusiasmInitialState
};

export const initStore = (initialState = INITIAL_STATE) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
