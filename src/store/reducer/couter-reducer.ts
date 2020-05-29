import { CounterActionEnum } from '../action/type';
import { CounterAction } from '../action';

export interface CounterState {
  count: number;
}

const intialCounterState: CounterState = {
  count: 0,
};

export default function (state = intialCounterState, action: CounterAction) {
  const payload = action.value || 0;
  switch (action.type) {
    case CounterActionEnum.INCREMENT_COUNT:
      return { count: state.count + 1 };
    case CounterActionEnum.DECREMENT_COUNT:
      return { count: state.count - 1 };
    case CounterActionEnum.ADD_COUNT_SUCCESS:
      return { count: state.count + payload };
    case CounterActionEnum.DECREASE_COUNT:
      return { count: state.count - payload };
    default:
      return state;
  }
}
