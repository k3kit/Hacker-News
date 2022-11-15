export enum NewsActionTypes {
  FETCH_NEWS = 'FETCH_NEWS',
  FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
  FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
}
interface NewsState {
  news: INews[];
  loading: boolean;
  error: null | string;
}
export interface INews {
  id: number;
  by: string;
  descendants: number;
  kids: [];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

interface fetchNewsAction {
  type: NewsActionTypes.FETCH_NEWS;
}

interface fetchNewsSuccessAction {
  type: NewsActionTypes.FETCH_NEWS_SUCCESS;
  payload: Array<INews>;
}

interface fetchNewsErrorAction {
  type: NewsActionTypes.FETCH_NEWS_ERROR;
  payload: string;
}

export type NewsAction = fetchNewsAction | fetchNewsErrorAction | fetchNewsSuccessAction;
