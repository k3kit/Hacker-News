import { INews } from './news';

export enum NewsInfoActionTypes {
  FETCH_NEWS_INFO_ERROR = 'FETCH_NEWS_INFO_ERROR',
  FETCH_NEWS_INFO = 'FETCH_NEWS_INFO',
  FETCH_NEWS_INFO_SUCCESS = 'FETCH_NEWS_INFO_SUCCESS',
}

interface fetchNewInfoAction {
  type: NewsInfoActionTypes.FETCH_NEWS_INFO;
}

interface fetchNewInfoSuccesAction {
  type: NewsInfoActionTypes.FETCH_NEWS_INFO_SUCCESS;
  payload: Array<INews>;
}

interface fetchNewsErrorAction {
  type: NewsInfoActionTypes.FETCH_NEWS_INFO_ERROR;
  payload: string;
}

export type InfoNewAction = fetchNewInfoAction | fetchNewInfoSuccesAction | fetchNewsErrorAction;
