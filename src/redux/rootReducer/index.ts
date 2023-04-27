import { combineReducers } from '@reduxjs/toolkit';
import reducerIssues from '../issues/reducer'
import reducerUrls from '../urls/reducer'

export const rootReducer = combineReducers({
  arrIssues: reducerIssues,
  arrUrls: reducerUrls
});
