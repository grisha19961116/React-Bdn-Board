import { createAction } from '@reduxjs/toolkit';
import { TIssues, TUpdateIssues } from '../types';

const actionGetIssuesSuccess = createAction('getIssues/success', (value: TIssues) => ({
  payload: value,
}));

const actionGetIssuesReject = createAction('getIssues/reject', () => ({
  payload: null,
}));

const actionUpdateIssues = createAction('update/issues', (value: TUpdateIssues) => ({
  payload: value,
}));

export {
  actionGetIssuesSuccess,
  actionGetIssuesReject,
  actionUpdateIssues
};
