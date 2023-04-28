import { createAction } from '@reduxjs/toolkit';
import { TUrl } from '../types';

const actionSetUrl = createAction('set/url', (value: TUrl) => ({
  payload: value,
}));

export {
  actionSetUrl
};
