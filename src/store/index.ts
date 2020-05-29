import {
  createStore,
  applyMiddleware,
  MiddlewareAPI,
  Dispatch,
  AnyAction,
  Middleware,
  compose,
} from 'redux';
// import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { CounterAction } from './action';
import reducer from './reducer';

import { createEpicMiddleware } from 'redux-observable';
import rootEpics from './epics';

// epic middleware
const epicMiddleware = createEpicMiddleware();
// router middleware
const history = createBrowserHistory();
const router = routerMiddleware(history);
// log middleware
const logger: Middleware = (store: MiddlewareAPI) => {
  return (next: Dispatch<AnyAction>) => {
    return (action: CounterAction) => {
      console.log('[Middleware] action:', action);
      const result = next(action);
      console.log('[Middleware] state:', store.getState());
      return result;
    };
  };
};

// redux devtool
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer(history),
  composeEnhancers(applyMiddleware(logger, epicMiddleware, router)),
);

epicMiddleware.run(rootEpics);

export { history };
export default store;
