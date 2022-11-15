import { INews, NewsAction, NewsActionTypes } from '../../types/news';
interface NewsState {
  news: INews[];
  loading: boolean;
  error: null | string;
}
const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
};

export const newsReducer = (state = initialState, action: NewsAction) => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS:
      return { ...state, loading: true };
    case NewsActionTypes.FETCH_NEWS_SUCCESS:
      return { ...state, loading: false, news: action.payload };
    case NewsActionTypes.FETCH_NEWS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
