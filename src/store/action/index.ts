import { Dispatch, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { CounterActionEnum } from './type';
import { RootState } from '../reducer';

export interface CounterAction extends AnyAction {
  readonly type: CounterActionEnum;
  value?: number;
}

export type myThunkDispatch = ThunkDispatch<RootState, undefined, CounterAction>;

export const incrementCounter = (): CounterAction => {
  return { type: CounterActionEnum.INCREMENT_COUNT };
};

export const decrementCounter = (): CounterAction => {
  return { type: CounterActionEnum.DECREMENT_COUNT };
};

export const addCounter = (value: number): CounterAction => {
  return { type: CounterActionEnum.ADD_COUNT_START, value };
};

export const addCounterAsync = (value: number) => (dispatch: Dispatch) => {
  setTimeout(() => {
    return dispatch(addCounter(value));
  }, 2000);
};

export const decreaseCounter = (value: number): CounterAction => {
  return { type: CounterActionEnum.DECREASE_COUNT, value };
};
