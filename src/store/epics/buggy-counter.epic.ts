import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { delay, map, mapTo } from 'rxjs/operators';
import { push } from 'connected-react-router';
// import { CounterAction } from '../action';
// import { RootState } from '../reducer';
import { CounterActionEnum } from '../action/type';

export function addCounterEpic(
  action$: ActionsObservable<any>,
  //   state$: StateObservable<RootState>,
): Observable<any> {
  return action$.pipe(
    ofType(CounterActionEnum.ADD_COUNT_START),
    delay(2000),
    map((action: any) => {
      console.log('epic:', action);
      return { type: CounterActionEnum.ADD_COUNT_SUCCESS, value: action.value };
    }),
  );
}

export function navigateEpic(action$: ActionsObservable<any>) {
  return action$.pipe(ofType(CounterActionEnum.ADD_COUNT_SUCCESS), mapTo(push('/posts')));
}
