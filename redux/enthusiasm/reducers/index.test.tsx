import { enthusiasm as reducer } from './index';
import { EnthusiasmAction, INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../actions/index';
import Enthusiasm from '../types/enthusiasm';

describe('Enthusiasm', () => {
  describe('reducer', () => {
    describe('Generic action', () => {
      const mockState: Enthusiasm = {
        languageName: 'JavaScript',
        enthusiasmLevel: 1
      };
      const mockAction = {
        type: 'UNKNOWN_ACTION'
      };
      const result = reducer(mockState, mockAction);

      it('should execute without an error', () => {
        expect(result).toBeDefined();
      });
    });    
    describe('INCREMENT_ENTHUSIASM', () => {
      const mockState: Enthusiasm = {
        languageName: 'JavaScript',
        enthusiasmLevel: 1
      };
      const mockAction: EnthusiasmAction = {
        type: INCREMENT_ENTHUSIASM
      };
      const result = reducer(mockState, mockAction);

      it('should execute without an error', () => {
        expect(result).toBeDefined();
      });
    });
    describe('DECREMENT_ENTHUSIASM', () => {
      const mockState: Enthusiasm = {
        languageName: 'JavaScript',
        enthusiasmLevel: 1
      };
      const mockAction: EnthusiasmAction = {
        type: DECREMENT_ENTHUSIASM
      };
      const result = reducer(mockState, mockAction);

      it('should execute without an error', () => {
        expect(result).toBeDefined();
      });
    });
  });
});