import { createAction } from '@reduxjs/toolkit';

const actionSetUrl = createAction('set/url', (value: string) => ({
  payload: value,
}));

export {
  actionSetUrl
};
