import { combineReducers } from 'redux';
import {History} from 'history'
import { connectRouter, RouterState } from 'connected-react-router';
import counterReducer, { CounterState } from './couter-reducer';

export interface RootState {
  counter: CounterState;
  router: RouterState;
}

const rootReducers = (history:History) => combineReducers({
  counter: counterReducer,
  router: connectRouter(history),
});

export default rootReducers;
