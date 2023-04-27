
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import { batchedSubscribe } from 'redux-batched-subscribe'
import debounce from 'lodash.debounce';
import { rootReducer } from '../rootReducer';

const debounceNotify = debounce(notify => notify());

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [batchedSubscribe(debounceNotify)],
})


export { store };
