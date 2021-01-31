import { Reducer } from 'redux';

import { ITaskState, ITaskTypes } from './types';

const INITIAL_STATE: ITaskState = {
  tasks: [],
};

const task: Reducer<ITaskState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITaskTypes.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload.newTask] };

    case ITaskTypes.LIST_TASKS:
      return { ...state, tasks: action.payload.allTasksList };

    case ITaskTypes.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(singleTask =>
          singleTask.id === action.payload.updatedTask.id
            ? action.payload.updatedTask
            : singleTask,
        ),
      };

    case ITaskTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(
          singleTask => singleTask.id !== action.payload.taskId,
        ),
      };

    default:
      return state;
  }
};

export default task;
