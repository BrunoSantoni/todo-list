import ITask from '@interfaces/ITask';

/* eslint-disable-next-line */
export enum ITaskTypes {
  ADD_TASK = '@task/ADD_TASK',
  LIST_TASKS = '@task/LIST_TASKS',
  UPDATE_TASK = '@task/UPDATE_TASK',
  DELETE_TASK = '@task/DELETE_TASK',
}

export interface ITaskState {
  tasks: ITask[];
}
