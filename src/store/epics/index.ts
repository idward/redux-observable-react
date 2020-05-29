import { combineEpics } from 'redux-observable';
import { addCounterEpic, navigateEpic } from './buggy-counter.epic';

const rootEpics = combineEpics(addCounterEpic, navigateEpic);

export default rootEpics;
