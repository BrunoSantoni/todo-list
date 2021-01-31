import { createStore, Store } from 'redux';

import rootReducer from './modules/rootReducer';

import { ITaskState } from './modules/task/types';

export interface IApplicationState {
  task: ITaskState;
}

const store: Store<IApplicationState> = createStore(rootReducer);

export default store;
