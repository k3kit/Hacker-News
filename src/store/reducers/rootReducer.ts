import { combineReducers } from '@reduxjs/toolkit';
import { infoNewReducer } from './InfoNewsReducer';
import { newsReducer } from './newsReducer';

export const rootReducer = combineReducers({
  news: newsReducer,
  infoNews: infoNewReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
