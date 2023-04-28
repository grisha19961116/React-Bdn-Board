import { createReducer } from '@reduxjs/toolkit';
import {
  actionSetUrl
} from '../action';
import { TUrl } from '../types';

const initialState: { urls: TUrl[] } = {
  urls: [],
}

const reducerUrls = createReducer(initialState, {
  [actionSetUrl.type]: (state, { payload }: { payload: TUrl }) => {
    return { urls: [...state.urls, payload] }
  },
});

export default reducerUrls;
