import { createReducer } from '@reduxjs/toolkit';
import {
  actionSetUrl
} from '../action';

const initialState: { urls: string[] } = {
  urls: [],
}

const reducerUrls = createReducer(initialState, {
  [actionSetUrl.type]: (state, { payload }: { payload: string }) => {
    return { urls: [...state.urls, payload] }
  },
});

export default reducerUrls;
