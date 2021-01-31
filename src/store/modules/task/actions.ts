import { action } from 'typesafe-actions';

import ITask from '@interfaces/ITask';

import { ITaskTypes } from './types';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const getTasks = (data: { allTasksList: ITask[] }) =>
  action(ITaskTypes.LIST_TASKS, data);
export const addTask = (data: { newTask: ITask }) =>
  action(ITaskTypes.ADD_TASK, data);
export const updateTask = (data: { updatedTask: ITask }) =>
  action(ITaskTypes.UPDATE_TASK, data);
export const deleteTask = (id: { taskId: number }) =>
  action(ITaskTypes.DELETE_TASK, id);
