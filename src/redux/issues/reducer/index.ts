import { createReducer } from '@reduxjs/toolkit';
import {
  actionGetIssuesSuccess,
  actionGetIssuesReject,
  actionUpdateIssues
} from '../action';
import { IIssuesState, IUpdateIssuesPayload, IIssuesPayload } from '../types';

const initialState: IIssuesState = {
  issues: [[], [], []],
}

const reducerIssues = createReducer(initialState, {
  [actionGetIssuesSuccess.type]: (state, { payload }: IIssuesPayload) => {
    const issues = [...payload]
    const newIssues: any[] = []
    const inProgress: any[] = []
    const closed: any[] = []
    issues.forEach((el: any) => {
      if (el.assignees.length > 0) {
        return inProgress.push(el)
      } else if (el.closed_at !== null) {
        return closed.push(el)
      } else {
        return newIssues.push(el)
      }
    })
    return { issues: [[...state.issues[0], ...newIssues], [...state.issues[1], ...inProgress], [...state.issues[2], ...closed]] };
  },
  [actionGetIssuesReject.type]: (state, _) => {
    return state;
  },
  [actionUpdateIssues.type]: (state, { payload }: IUpdateIssuesPayload) => {
    const { columnFromIndex, itemFromIndex, columnToIndex, itemToIndex } = payload
    const reorderedIssues = [...state.issues];
    const [removedStore] = reorderedIssues[columnFromIndex].splice(itemFromIndex, 1);
    reorderedIssues[columnToIndex].splice(itemToIndex, 0, removedStore);
    return state;
  },
});

export default reducerIssues;
